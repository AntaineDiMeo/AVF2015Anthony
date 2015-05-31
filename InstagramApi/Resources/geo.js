//get geo coordinates function
var getGeo = function() {
	//api file reuqire
	var data = require('api');
	if (Ti.Platform.osname === "android") {
		var lat = 28.53843;
		var lng = -81.37896;
		data.myData(lat, lng);
	} else {
	
	//get current position
Ti.Geolocation.getCurrentPosition(function(e){
		

		
		var lat = e.coords.latitude;
		var lng = e.coords.longitude;
		
	var url = "https://api.instagram.com/v1/tags/beauty/media/recent?client_id=3da7bfe44aa24c68a4194004466803cf&lat=28.53843&lng=-81.37896";
		data.myData(url);
		
	});
}
	
};
//export the getGeo function
exports.getGeo = getGeo;
	
