//api function
var apiData = function(lat, lng) {
	var url = "http://api.wunderground.com/api/3491877108138f60/conditions/forecast/q/" + lat + "," + lng + ".json";
	var xhr = Ti.Network.createHTTPClient({
		onload : function(e) {
			var json = JSON.parse(this.responseText);



			//api data
			var myWeather = {
				city : json.current_observation.display_location.city,
				state : json.current_observation.display_location.state,
				weather : json.current_observation.weather,
				temperatureF : json.current_observation.temp_f,
				temperatureC : json.current_observation.temp_c,
				humidity : json.current_observation.relative_humidity,
				feelsLikeF : json.current_observation.feelslike_f,
				feelsLikeC : json.current_observation.feelslike_c,
				time : json.current_observation.local_time_rfc822,
				wind : json.current_observation.wind_mph,
				gust : json.current_observation.wind_gust_mph,
				windDir : json.current_observation.wind_dir,
				visibility : json.current_observation.visibility_mi,
				dewpoint : json.current_observation.dewpoint_f,
				rain : json.current_observation.precip_today_in,
			};

			
var data = [];

			//data.push({
			for ( i = 0, j = json.forecast.txt_forecast.forecastday.length; i < j; i++) {
				data.push({
					forecast : json.forecast.txt_forecast.forecastday[i].title,
					icon : json.forecast.txt_forecast.forecastday[i].icon,
					description : json.forecast.txt_forecast.forecastday[i].fcttext,
				});

			}
			myWeather.temperature = data;
			
			//Database
		//I cannot seem to fix a SQL statement I have in the 44th line of my code so The database will not run correctly
			/*var db = require("database");
			db.save(data);*/
			
			//ui page require
			var ui = require('ui');
			ui.makeUI(myWeather);
			
		},

		onerror : function() {
			//alert("Problem");
		},
		timeout : 5000
	});
	xhr.open("GET", url);
	xhr.send();
};
exports.apiData = apiData;

