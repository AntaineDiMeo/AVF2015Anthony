/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2009-2015 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 * 
 * WARNING: This is generated code. Modify at your own risk and without support.
 */

#import "TiDimension.h"

@class TiProxy;
@class TiColor;
@class TiFile;
@class TiBuffer;
@class WebFont;
@class TiScriptError;

/*	NOTE TO MODULE DEVELOPERS:
 *	The following 4 imports will be going away as it's better to simply
 *	forward-declare the classes in headers. If you've been relying on TiUtils
 *	to do the including of TiProxy for you, please fix this. However, to
 *	avoid breaking modules 
 */
#import "TiColor.h"
#import "WebFont.h"
#import "TiFile.h"
#import "TiBuffer.h"

bool Base64AllocAndEncodeData(const void *inInputData, size_t inInputDataSize, char **outOutputDataPtr, size_t *outOutputDataSize);

typedef enum {
    BAD_DEST_OFFSET = -1,
    BAD_SRC_OFFSET = -2,
    BAD_ENCODING = -4,
    BAD_TYPE = -8,
    BAD_ENDIAN = -16,
    TOO_SMALL = -32,
} EncodingError;

/**
 InstagramApi orientation flags.
 */
typedef enum
{
	TiOrientationNone = 0,
	TiOrientationAny = 0xFFFF,
	
    /**
     Portrait orientation flag.
     */
	TiOrientationPortrait			= 1 << UIInterfaceOrientationPortrait,
    
    /**
     Upside-down portrait orientation flag.
     */
	TiOrientationPortraitUpsideDown	= 1 << UIInterfaceOrientationPortraitUpsideDown,
	
    /**
     Landscape left orientation flag.
     */
    TiOrientationLandscapeLeft		= 1 << UIInterfaceOrientationLandscapeLeft,
	
    /**
     Landscape right orientation flag.
     */
    TiOrientationLandscapeRight		= 1 << UIInterfaceOrientationLandscapeRight,
    
    /**
     Landscape (left or right) orientation flag.
     */
    TiOrientationLandscapeOnly		= TiOrientationLandscapeLeft | TiOrientationLandscapeRight,
	
    /**
     Portrait (normal or upside-down) orientation flag.
     */
    TiOrientationPortraitOnly		= TiOrientationPortrait | TiOrientationPortraitUpsideDown,
	
} TiOrientationFlags;

#define TI_ORIENTATION_ALLOWED(flag,bit)	(flag & (1<<bit))
#define TI_ORIENTATION_SET(flag,bit)		(flag |= (1<<bit))


@protocol VolumeSupport <NSObject>
@required
-(void)setVolume:(float)volume;
-(float)volume;
@end


/**
 Utilities class.
 */
@interface TiUtils : NSObject {

}

+(TiOrientationFlags) TiOrientationFlagsFromObject:(id)args;

/**
 Converts date to UTC format.
 @param date The input date.
 @return The date string in UTC format.
 */
+(NSString *)UTCDateForDate:(NSDate*)date;

/**
 Converts string in UTC format into a date.
 @param date The date string in UTC format.
 @return The converted date.
 */
+(NSDate *)dateForUTCDate:(NSString*)date;

/**
 Returns current date in UTC format.
 @return The date string in UTC format.
 */
+(NSString *)UTCDate;

/**
 Generates a new UUID.
 @return The generate UUID.
 */
+(NSString*)createUUID;

/**
 Creates a temporary file with name extension.
 @param extension The filename extension.
 @return The created temporary file object.
 */
+(TiFile*)createTempFile:(NSString*)extension;

/**
 Loads application bundle resource by URL.
 @param url The resource URL
 @return The resource data.
 */
+(NSData *)loadAppResource:(NSURL*)url;

/**
 Encodes the input string according by escaping illegal characters.
 @param unencodedString The input string.
 @return The encoded string.
 */
+(NSString *)encodeQueryPart:(NSString *)unencodedString;

/**
 Encodes the URL query string by escaping illegal characters.
 @param unencodedString The input string.
 @return The encoded string.
 */
+(NSString *)encodeURIParameters:(NSString *)unencodedString;


+(UIImage*)toImage:(id)object proxy:(TiProxy*)proxy size:(CGSize)imageSize;
+(UIImage*)toImage:(id)object proxy:(TiProxy*)proxy;

/**
 Constructs URL from string using provided base URL.
 @param relativeString The relative URL
 @param rootPath The base URL.
 @return The absolute URL.
 */
+(NSURL*)toURL:(NSString *)relativeString relativeToURL:(NSURL *)rootPath;

/**
 Constructs URL from string using proxy's base URL.
 @param relativeString The relative URL
 @param proxy The proxy to use as base URL.
 @return The absolute URL.
 */
+(NSURL*)toURL:(NSString *)relativeString proxy:(TiProxy*)proxy;

//+(NSURL*)toURL:(id)object proxy:(TiProxy*)proxy;

/**
 Loads and returns image for the provided object.
 
 If the _object_ parameter type is <TiBlob>, it will be converted to image and returned.
 Otherwise if the _object_ type is NSString, it will be first converted to URL using _proxy_ as a base, then the image will be loaded from the URL.
 @param object The input object. It could be either <TiBlob> or NSString.
 @param proxy The proxy to use as base URL for image loading if _object_ type is NSString.
 @return The loaded image.
 @see toURL:proxy:
 */
+(UIImage *)image:(id)object proxy:(TiProxy*)proxy;

+(UIImage *)stretchableImage:(id)object proxy:(TiProxy*)proxy;

/**
 Converts input value into a string.
 @param value The input value.
 @return The textual representation of the value.
 */
+(NSString*)stringValue:(id)value;

+(NSString*)replaceString:(NSString *)string characters:(NSCharacterSet *)characterSet withString:(NSString *)replacementString;

+(NSNumber *) numberFromObject:(id) obj;

/**
 Converts input value into a boolean.
 @param value The input value.
 @return The boolean representation of the value.
 @see boolValue:def:
 */
+(BOOL)boolValue:(id)value;

/**
 Converts input value into a boolean with default fallback.
 @param value The input value.
 @param def The default value if the input value cannot be converted.
 @return The boolean representation of the value or default value otherwise.
 @see boolValue:
 */
+(BOOL)boolValue:(id)value def:(BOOL)def;

/**
 Converts input value into a point type.
 @param value The input value of either <TiPoint> type or NSDictionary with {x,y} keys.
 @return The point representation of the value or {0,0} if the input value cannot be converted.
 @see pointValue:valid:
 */
+(CGPoint)pointValue:(id)value;

/**
 Converts input value into the point type.
 @param value The input value of either <TiPoint> type or NSDictionary with {x,y} keys.
 @param isValid The optional output parameter indicating the status of the convertion. If not _NULL_, its value is set to _YES_ if the value was converted successfully and _NO_ otherwise.
 @return The point representation of the value or {0,0} if the input value cannot be converted.
 @see pointValue:
 */
+(CGPoint)pointValue:(id)value valid:(BOOL*)isValid;

+(CGPoint)pointValue:(id)value bounds:(CGRect)bounds defaultOffset:(CGPoint)defaultOffset;

+(CGRect)rectValue:(id)value;

/**
 Converts input value into a float.
 @param value The input value.
 @return The float representation of the value.
 @see floatValue:def:
 */
+(CGFloat)floatValue:(id)value;

/**
 Converts input value into a float with default fallback.
 @param value The input value.
 @param def The default value if the input value cannot be converted.
 @return The float representation of the value.
 @see floatValue:
 */
+(CGFloat)floatValue:(id)value def:(CGFloat) def;

/**
 Converts input value into a float with default fallback.
 @param value The input value.
 @param def The default value if the input value cannot be converted.
 @param isValid The optional output parameter indicating the status of the convertion. If not _NULL_, its value is set to _YES_ if the value was converted successfully and _NO_ otherwise.
 @return The float representation of the value.
 @see floatValue:
 */
+(CGFloat)floatValue:(id)value def:(CGFloat) def valid:(BOOL *) isValid;

/**
 Converts input value into a double.
 @param value The input value.
 @return The double representation of the value.
 @see doubleValue:def:
 */
+(double)doubleValue:(id)value;

/**
 Converts input value into a double with default fallback.
 @param value The input value.
 @param def The default value if the input value cannot be converted.
 @return The double representation of the value.
 @see doubleValue:
 */
+(double)doubleValue:(id)value def:(double) def;

/**
 Converts input value into a double with default fallback.
 @param value The input value.
 @param def The default value if the input value cannot be converted.
 @param isValid The optional output parameter indicating the status of the convertion. If not _NULL_, its value is set to _YES_ if the value was converted successfully and _NO_ otherwise.
 @return The double representation of the value.
 @see doubleValue:
 */
+(double)doubleValue:(id)value def:(double) def valid:(BOOL *) isValid;

/**
 Converts input value into an int.
 @param value The input value.
 @return The int representation of the value.
 @see intValue:def:
 */
+(int)intValue:(id)value;

/**
 Converts input value into an int with default fallback.
 @param value The input value.
 @param def The default value if the input value cannot be converted.
 @return The int representation of the value.
 @see intValue:
 */
+(int)intValue:(id)value def:(int)def;

/**
 Converts input value into an int with default fallback.
 @param value The input value.
 @param def The default value if the input value cannot be converted.
 @param isValid The optional output parameter indicating the status of the convertion. If not _NULL_, its value is set to _YES_ if the value was converted successfully and _NO_ otherwise.
 @return The int representation of the value.
 @see intValue:
 */
+(int)intValue:(id)value def:(int)def valid:(BOOL*)isValid;

/**
 Converts input value into the color type.
 @param value The input value of either TiColor type or class with string representation that could be converted to a color.
 @return The color representation of the value or _nil_ if the input value cannot be converted.
 */
+(TiColor*)colorValue:(id)value;

/**
 Converts input value into the dimention type.
 @param value The input value that could be converted to a color.
 @return The dimension representation of the value or TiDimensionUndefined if the input value cannot be converted.
 */
+(TiDimension)dimensionValue:(id)value;

+(id)valueFromDimension:(TiDimension)dimension;

/**
 Looks up a value for the key in the provided dictionary and returns it as an int.
 @param name The lookup key.
 @param properties The dictionary.
 @param def The default value if the key doesn't exist in the dictionary.
 @param exists The optional output parameter indicating the status of dictionary lookup. If not _NULL_, its value is set to _YES_ if the key was founda and _NO_ otherwise.
 @return The resulting value as an int
 */
+(int)intValue:(NSString*)name properties:(NSDictionary*)properties def:(int)def exists:(BOOL*) exists;

/**
 Looks up a value for the key in the provided dictionary and returns it as a double.
 @param name The lookup key.
 @param properties The dictionary.
 @param def The default value if the key doesn't exist in the dictionary.
 @param exists The optional output parameter indicating the status of dictionary lookup. If not _NULL_, its value is set to _YES_ if the key was founda and _NO_ otherwise.
 @return The resulting value as a double
 */
+(double)doubleValue:(NSString*)name properties:(NSDictionary*)properties def:(double)def exists:(BOOL*) exists;

/**
 Looks up a value for the key in the provided dictionary and returns it as a float.
 @param name The lookup key.
 @param properties The dictionary.
 @param def The default value if the key doesn't exist in the dictionary.
 @param exists The optional output parameter indicating the status of dictionary lookup. If not _NULL_, its value is set to _YES_ if the key was founda and _NO_ otherwise.
 @return The resulting value as a float
 */
+(float)floatValue:(NSString*)name properties:(NSDictionary*)properties def:(float)def exists:(BOOL*) exists;

/**
 Looks up a value for the key in the provided dictionary and returns it as a boolean.
 @param name The lookup key.
 @param properties The dictionary.
 @param def The default value if the key doesn't exist in the dictionary.
 @param exists The optional output parameter indicating the status of dictionary lookup. If not _NULL_, its value is set to _YES_ if the key was founda and _NO_ otherwise.
 @return The resulting value as a boolean
 */
+(BOOL)boolValue:(NSString*)name properties:(NSDictionary*)properties def:(BOOL)def exists:(BOOL*) exists;

/**
 Looks up a value for the key in the provided dictionary and returns it as a string.
 @param name The lookup key.
 @param properties The dictionary.
 @param def The default value if the key doesn't exist in the dictionary.
 @param exists The optional output parameter indicating the status of dictionary lookup. If not _NULL_, its value is set to _YES_ if the key was founda and _NO_ otherwise.
 @return The resulting value as a string
 */
+(NSString*)stringValue:(NSString*)name properties:(NSDictionary*)properties def:(NSString*)def exists:(BOOL*) exists;

/**
 Looks up a value for the key in the provided dictionary and returns it as a point.
 @param name The lookup key.
 @param properties The dictionary.
 @param def The default value if the key doesn't exist in the dictionary.
 @param exists The optional output parameter indicating the status of dictionary lookup. If not _NULL_, its value is set to _YES_ if the key was founda and _NO_ otherwise.
 @return The resulting value as a point
 */
+(CGPoint)pointValue:(NSString*)name properties:(NSDictionary*)properties def:(CGPoint)def exists:(BOOL*) exists;

/**
 Looks up a value for the key in the provided dictionary and returns it as a color.
 @param name The lookup key.
 @param properties The dictionary.
 @param def The default value if the key doesn't exist in the dictionary.
 @param exists The optional output parameter indicating the status of dictionary lookup. If not _NULL_, its value is set to _YES_ if the key was founda and _NO_ otherwise.
 @return The resulting value as a color
 */
+(TiColor*)colorValue:(NSString*)name properties:(NSDictionary*)properties def:(TiColor*)def exists:(BOOL*) exists;

/**
 Looks up a value for the key in the provided dictionary and returns it as a dimension.
 @param name The lookup key.
 @param properties The dictionary.
 @param def The default value if the key doesn't exist in the dictionary.
 @param exists The optional output parameter indicating the status of dictionary lookup. If not _NULL_, its value is set to _YES_ if the key was founda and _NO_ otherwise.
 @return The resulting value as a dimension
 */
+(TiDimension)dimensionValue:(NSString*)name properties:(NSDictionary*)properties def:(TiDimension)def exists:(BOOL*) exists;

+(NSShadow*)shadowValue:(id)value;

+(int)intValue:(NSString*)name properties:(NSDictionary*)props def:(int)def;

+(double)doubleValue:(NSString*)name properties:(NSDictionary*)props def:(double)def;

+(float)floatValue:(NSString*)name properties:(NSDictionary*)props def:(float)def;

+(BOOL)boolValue:(NSString*)name properties:(NSDictionary*)props def:(BOOL)def;

+(NSString*)stringValue:(NSString*)name properties:(NSDictionary*)properties def:(NSString*)def;

+(CGPoint)pointValue:(NSString*)name properties:(NSDictionary*)properties def:(CGPoint)def;

+(TiColor*)colorValue:(NSString*)name properties:(NSDictionary*)properties def:(TiColor*)def;

+(TiDimension)dimensionValue:(NSString*)name properties:(NSDictionary*)properties def:(TiDimension)def;


+(WebFont*)fontValue:(NSDictionary*)properties def:(WebFont*)def;

+(UIDeviceOrientation)orientationValue:(id)value def:(UIDeviceOrientation)def;

+(int)intValue:(NSString*)name properties:(NSDictionary*)props;

+(double)doubleValue:(NSString*)name properties:(NSDictionary*)props;

+(float)floatValue:(NSString*)name properties:(NSDictionary*)props;

+(BOOL)boolValue:(NSString*)name properties:(NSDictionary*)props;

+(NSString*)stringValue:(NSString*)name properties:(NSDictionary*)properties;

+(CGPoint)pointValue:(NSString*)name properties:(NSDictionary*)properties;

+(TiColor*)colorValue:(NSString*)name properties:(NSDictionary*)properties;

+(TiDimension)dimensionValue:(NSString*)name properties:(NSDictionary*)properties;

+(NSDictionary*)pointToDictionary:(CGPoint)point;

+(NSDictionary*)rectToDictionary:(CGRect)rect;

+(NSDictionary*)sizeToDictionary:(CGSize)size;

+(UIEdgeInsets)contentInsets:(id)value;

+(CGRect)contentFrame:(BOOL)window;

+(CGFloat)sizeValue:(id)value;

+(WebFont*)fontValue:(id)value;

+(TiScriptError*) scriptErrorValue:(id)value;

+(NSTextAlignment)textAlignmentValue:(id)alignment;

+(NSString*)jsonStringify:(id)value;
+(id)jsonParse:(NSString*)value;

+(NSString*)currentArchitecture;

+(NSString*)jsonStringify:(id)value error:(NSError**)error;
+(id)jsonParse:(NSString*)value error:(NSError**)error;;

/**
 Whether or not the current device orientation is portrait.
 @return _YES_ is the current device orientation is portrait, _NO_ otherwise.
 */
+(BOOL)isOrientationPortait;

/**
 Whether or not the current device orientation is landscape.
 @return _YES_ is the current device orientation is landscape, _NO_ otherwise.
 */
+(BOOL)isOrientationLandscape;

/**
 Returns the current device orientation.
 @return The current device orientation.
 */
+(UIInterfaceOrientation)orientation;

+(CGRect)navBarRect;

+(CGSize)navBarTitleViewSize;

+(CGRect)navBarTitleViewRect;

+(CGRect)screenRect;

+(CGPoint)centerSize:(CGSize)smallerSize inRect:(CGRect)largerRect;

+(CGRect)centerRect:(CGRect)smallerRect inRect:(CGRect)largerRect;

/**
 Sets the view's bounds and center coordinates.
 @param view The view to make changes on.
 @param frameRect The rectangle containing bounds to apply to the view.
 */
+(void)setView:(UIView *)view positionRect:(CGRect)frameRect;

+(CGRect)viewPositionRect:(UIView *)view;

+(BOOL)barTranslucencyForColor:(TiColor *)color;
+(UIColor *)barColorForColor:(TiColor *)color;
+(UIBarStyle)barStyleForColor:(TiColor *)color;

+(void)applyColor:(TiColor *)color toNavigationController:(UINavigationController *)navController;

/**
 Whether or not the current device interface idiom is iPad.
 @return _YES_ if the current device interface idiom is iPad, _NO_ otherwise.
 */
+(BOOL)isIPad;

/**
 Whether or not the current OS version is equal to or greater than 4.2.
 @return _YES_ if the current OS version is equal to or greater than 4.2, _NO_ otherwise.
 */
+(BOOL)isIOS4_2OrGreater;

/**
 Whether or not the current OS version is equal to or greater than 5.0.
 @return _YES_ if the current OS version is equal to or greater thann 5.0, _NO_ otherwise.
 */
+(BOOL)isIOS5OrGreater;

/**
 Whether or not the current OS version is equal to or greater than 6.0.
 @return _YES_ if the current OS version is equal to or greater thann 6.0, _NO_ otherwise.
 */
+(BOOL)isIOS6OrGreater;

/**
 Whether or not the current OS version is equal to or greater than 7.0.
 @return _YES_ if the current OS version is equal to or greater thann 7.0, _NO_ otherwise.
 */
+(BOOL)isIOS7OrGreater;

/**
 Whether or not the current OS version is equal to or greater than 8.0.
 @return _YES_ if the current OS version is equal to or greater thann 8.0, _NO_ otherwise.
 */
+(BOOL)isIOS8OrGreater;

/**
 Whether or not the current device is an iPhone 4.
 @return _YES_ if the current device is an iPhone 4, _NO_ otherwise.
 */
+(BOOL)isIPhone4;

/**
 Whether or not the current device has retina display.
 @return _YES_ if the current device has retina display, _NO_ otherwise.
 */
+(BOOL)isRetinaDisplay;

/**
 Whether or not the current device has a 4 inch retina display (iPhone5).
 @return _YES_ if the current device has a 4 inch retina display, _NO_ otherwise.
 */
+(BOOL)isRetinaFourInch;

/**
 Whether or not the current device has a 4.7 inch retina display (iPhone6).
 @return _YES_ if the current device has a 4.7 inch retina display, _NO_ otherwise.
 */
+(BOOL)isRetinaiPhone6;

/**
 Whether or not the current device has HD retina display (@3X).
 @return _YES_ if the current device has HD retina display, _NO_ otherwise.
 */
+(BOOL)isRetinaHDDisplay;
+(void)setVolume:(float)volume onObject:(id)object;
+(float)volumeFromObject:(id)theObject default:(float)def;
+(void)configureController:(UIViewController*)controller withObject:(id)object;

+(CGRect)frameForController:(UIViewController*)theController;

+(int)dpi;

+(NSStringEncoding)charsetToEncoding:(NSString*)charset;

+(TiDataType)constantToType:(NSString*)typeStr;

+(int)dataSize:(TiDataType)type;

+(int)encodeString:(NSString*)string toBuffer:(TiBuffer*)dest charset:(NSString*)charset offset:(NSUInteger)destPosition sourceOffset:(NSUInteger)srcPosition length:(NSUInteger)srcLength;

+(int)encodeNumber:(NSNumber*)data toBuffer:(TiBuffer*)dest offset:(int)position type:(NSString*)type endianness:(CFByteOrder)byteOrder;

/**
 Generates MD5 hash for the provided data.
 @param data The input data.
 @return MD5 hash string.
 */
+(NSString*)md5:(NSData*)data;

/**
 Converts array of byte into a hex string.
 @param input The array of bytes.
 @param length The length of the input array.
 @return Hex representation of the input array.
 */
+(NSString*)convertToHex:(unsigned char*)input length:(size_t)length;

+(NSString*)appIdentifier;

+(NSString*)getResponseHeader:(NSString*)header fromHeaders:(NSDictionary*)responseHeaders;

+(UIImage*)loadBackgroundImage:(id)image forProxy:(TiProxy*)proxy;

/**
 Convenience method to extract a useful error message from NSError, or nil if none exist.
 @param error The NSError
 @return error's localizedDescription and userDescription concatenated
 */
+ (NSString*)messageFromError:(NSError *)error;

/**
 Convenience method to create a mutable dictionary prepopulated with success, code, and error values.
 This is for use with callbacks that are not events. While it is possible to use this in events,
 the built-in event error reporting functionality is faster.
 @param code The integer representing an error. Use 0 for a success, and -1 for an unknown error.
 @param message The optional string describing the error.
 */
+ (NSMutableDictionary *)dictionaryWithCode:(NSInteger)code message:(NSString *)message;

@end
