//get geo coordinates function
var getGeo = function() {
	//api file reuqire
	var data = require('api');
	if (Ti.Platform.osname === "android") {
		var lat = 25.7742700;
		var lng = -80.1936600;
		data.myData(lat, lng);
	} else {
	
	//get current position
Ti.Geolocation.getCurrentPosition(function(e){
		

		
		var lat = e.coords.latitude;
		var lng = e.coords.longitude;
		
	
		data.myData(lat, lng);
		
	});
}
	
};
//export the getGeo function
exports.getGeo = getGeo;
	
