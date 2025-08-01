/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2009-2015 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 * 
 * WARNING: This is generated code. Modify at your own risk and without support.
 */

#import <UIKit/UIKit.h>
#import "TiControllerProtocols.h"

@interface TiRootViewController : UIViewController<TiRootControllerProtocol, TiControllerContainment, TiOrientationController> {
    //Default background properties
    UIColor* bgColor;
    UIImage* bgImage;
    UIView* hostView;
    NSInteger curTransformAngle;
    BOOL forceLayout;
    UIImageView* defaultImageView;
    
    //Keyboard stuff
    BOOL updatingAccessoryView;
    UIView * enteringAccessoryView;	//View that will enter.
    UIView * accessoryView;			//View that is onscreen.
    UIView * leavingAccessoryView;	//View that is leaving the screen.
    TiViewProxy<TiKeyboardFocusableView> * keyboardFocusedProxy; //View whose becoming key affects things.
	
    CGRect startFrame;		//Where the keyboard was before the handling
    CGRect targetedFrame;	//The keyboard place relative to where the accessoryView is moving;
    CGRect endFrame;		//Where the keyboard will be after the handling
    BOOL keyboardVisible;	//If false, use enterCurve. If true, use leaveCurve.
    UIViewAnimationCurve enterCurve;
    CGFloat enterDuration;
    UIViewAnimationCurve leaveCurve;
    CGFloat leaveDuration;
    
    //Orientation Stuff
    UIInterfaceOrientation orientationHistory[4];
    BOOL forcingStatusBarOrientation;
    BOOL isCurrentlyVisible;
    TiOrientationFlags defaultOrientations;
    NSMutableArray* containedWindows;
    NSMutableArray* modalWindows;
    BOOL forcingRotation;
    BOOL statusBarInitiallyHidden;
    BOOL viewControllerControlsStatusBar;
    UIStatusBarStyle defaultStatusBarStyle;
    
    UIInterfaceOrientation deviceOrientation;
    
    BOOL statusBarIsHidden;
    BOOL statusBarVisibilityChanged;
    NSInteger activeAlertControllerCount;
}

//InstagramApi Support
-(CGRect)resizeView;
-(void)repositionSubviews;
-(UIView *)topWindowProxyView;
-(NSUInteger)supportedOrientationsForAppDelegate;
-(void)incrementActiveAlertControllerCount;
-(void)decrementActiveAlertControllerCount;
-(UIViewController*)topPresentedController;
-(UIInterfaceOrientation) lastValidOrientation:(TiOrientationFlags)orientationFlags;
-(void)updateStatusBar;
@property (nonatomic, readonly) BOOL statusBarInitiallyHidden;
@property (nonatomic, readonly) UIStatusBarStyle defaultStatusBarStyle;
@property (nonatomic, readonly) BOOL statusBarVisibilityChanged;
@property(nonatomic,readonly) TiViewProxy<TiKeyboardFocusableView> * keyboardFocusedProxy;
#if defined(DEBUG) || defined(DEVELOPER)
-(void)shutdownUi:(id)arg;
#endif
- (UIImage*)defaultImageForOrientation:(UIDeviceOrientation) orientation resultingOrientation:(UIDeviceOrientation *)imageOrientation idiom:(UIUserInterfaceIdiom*) imageIdiom;


@end
