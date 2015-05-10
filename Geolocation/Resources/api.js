//api function
var apiData = function(lat, lng){
	var url = "http://api.wunderground.com/api/3491877108138f60/conditions/q/" + lat + "," + lng + ".json";
	var xhr = Ti.Network.createHTTPClient({
		onload: function(e){
			var json = JSON.parse(this.responseText);
			

			//api data
			//data.push({
				var myWeather = {
				city: json.current_observation.display_location.city,
				state: json.current_observation.display_location.state,
				weather: json.current_observation.weather,
				temperatureF: json.current_observation.temp_f,
				temperatureC: json.current_observation.temp_c,
				humidity: json.current_observation.relative_humidity,
				feelsLikeF: json.current_observation.feelslike_f,
				feelsLikeC: json.current_observation.feelslike_c,
				time: json.current_observation.local_time_rfc822,
				wind: json.current_observation.wind_mph,
				gust: json.current_observation.wind_gust_mph,
				windDir: json.current_observation.wind_dir,
				visibility: json.current_observation.visibility_mi,
				dewpoint: json.current_observation.dewpoint_f,
				rain: json.current_observation.precip_today_in,
				
				
			};
			
			
		
			//ui page require
			var ui = require('ui');
			ui.makeUI(myWeather);
		},
		
		onerror: function(){
			//alert("Problem");
			},
		timeout: 5000
	});
	xhr.open("GET", url);
	xhr.send();	
};
exports.apiData = apiData;


