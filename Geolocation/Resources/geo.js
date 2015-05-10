//get geo coordinates function
var getGeo = function() {
	//api file reuqire
	var data = require('api');
	if (Ti.Platform.osname === "android") {
		var lat = 40.688889;
		var lng = -74.044444;
		data.apiData(lat, lng);
	} else {
	
	//get current position
Ti.Geolocation.getCurrentPosition(function(e){
		

		
		var lat = e.coords.latitude;
		var lng = e.coords.longitude;
		
	
		data.apiData(lat, lng);
		
	});
}
	
};
//export the getGeo function
exports.getGeo = getGeo;
	
