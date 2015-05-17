

var win = Ti.UI.createWindow({
	backgroundImage: "orange.png",
	
});


//platform height width
var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
//logo

var forecastView = Ti.UI.createView({
	top:20,
	width: pWidth,
	height: 165,
	backgroundColor: "#50000000"
});

//temperature image
	var tempCircle = Ti.UI.createImageView({
					
		width: 150,
		height:150,
		borderRadius: 75,
		backgroundColor: "#50ffffff"
	});
				
				
	var windCircle = Ti.UI.createView({
		top:520,
		left: 100,
		height: 120,
		width: 120,
		borderRadius: 60,
		backgroundColor: "#50ffffff"
	});
	var humidityCircle = Ti.UI.createView({
		top: 700,
		right: 225,
		height: 120,
		width: 120,
		borderRadius: 60,
		backgroundColor:"#50ffffff",
	});
var dewpointCircle = Ti.UI.createView({
		top: 325,
		right: 140,
		height: 120,
		width: 120,
		borderRadius: 60,
		backgroundColor:"#50ffffff",
});
var stateCityCircle = Ti.UI.createView({
		top: 325,
		left: 140,
		height: 120,
		width: 120,
		borderRadius: 60,
		backgroundColor:"#50ffffff",
}); 
var windDirCircle = Ti.UI.createView({
		top: 700,
		left: 225,
		height: 120,
		width: 120,
		borderRadius: 60,
		backgroundColor:"#50ffffff",
	});
var feelsLikeCircle = Ti.UI.createView({
		top: 520,
		right: 100,
		height: 120,
		width: 120,
		borderRadius: 60,
		backgroundColor:"#50ffffff",
	});
var visibilityCircle = Ti.UI.createView({
		top: 225,
		height: 120,
		width: 120,
		borderRadius: 60,
		backgroundColor:"#50ffffff",
	});
	//background loop clouds
var videoPlayer = Titanium.Media.createVideoPlayer({
	
	autoplay: true,
	navBarHidden: true,
	mediaControlStyle: Titanium.Media.VIDEO_CONTROL_NONE, 
    scalingMode:Titanium.Media.VIDEO_SCALING_ASPECT_FILL,
    
    repeatMode: Titanium.Media.VIDEO_REPEAT_MODE_ONE,
    zIndex: 0,
});
	//orientation for the app
	Ti.Gesture.addEventListener("orientationchange", function(e){
  });
  
videoPlayer.url = "clouds.mp4";





//variables make ui function
var makeUI = function(myWeather) {
		
		//left side information
		var city = Ti.UI.createLabel({
					color : '#fff',
					font : {fontFamily : 'Futura', fontSize : 20,},
					text : "City",
					top: 20
				});
		var state = Ti.UI.createLabel({
					color : 'white',
					font : {fontFamily : 'Futura', fontSize : 35,},
					text : "state",
					top: 50
				});
				
		var time = Ti.UI.createLabel({
					color : 'white',
					font : {fontFamily : 'Futura', fontSize : 30,},
					bottom: 20
				});
		
		var weather = Ti.UI.createLabel({
					color : 'white',
					font : {fontFamily : "Futura", fontSize : 30,},
					text : "Weather",
					top: 590
				});
		
		var temp = Ti.UI.createLabel({
					color : '#80000000',
					font : {fontFamily : 'futura',  fontSize: 40,}
				});
				
		var humidity = Ti.UI.createLabel({
					color : 'white',
					font : {fontFamily : 'Futura', fontSize : 30,},
				});
			var humidityTxt = Ti.UI.createLabel({
				color: "white",
				text: "Humidity",
				top: 80
			});
		var feelLike = Ti.UI.createLabel({
					color : 'white',
					font : {fontFamily : 'Futura', fontSize : 20,},
				
				});
				var feelLikeTxt = Ti.UI.createLabel({
					color: "white",
					text: "Feels Like",
					top: 80
				});
			//right side information
		var wind = Ti.UI.createLabel({
			color : 'white',
					font : {fontFamily : 'Futura', fontSize : 30,},
				});
				var windTxt = Ti.UI.createLabel({
					text: "Wind Speed",
					color: "white",
					top: 80
				});
		var gust = Ti.UI.createLabel({
			color : 'white',
					font : {fontFamily : 'Futura', fontSize : 30,},
					top: 800
				});
		var windDir = Ti.UI.createLabel({
					color : 'white',
					font : {fontFamily : 'Futura', fontSize : 35,},
				});
		var windDirTxt = Ti.UI.createLabel({
			color: "white",
			text: "Direction",
			top: 75
		});
		var visibility = Ti.UI.createLabel({
					color : 'white',
					font : {fontFamily : 'Futura', fontSize : 30,},
				});
		var visibilityTxt = Ti.UI.createLabel({
					color: "white",
					text: "Visibility",
					top: 80
				});
		var dewpoint = Ti.UI.createLabel({
					color : 'white',
					font : {fontFamily : 'Futura', fontSize : 30,},
				});
		var dewpointTxt = Ti.UI.createLabel({
					color: "white",
					text: "Dewpoint",
					top: 80
				});
		var rain = Ti.UI.createLabel({
					color : 'white',
					font : {fontFamily : 'Futura', fontSize : 30,},
					top: 1000
				});
		
			
			//3 day forecast at the top of the screen and its variables
				var dayOne = Ti.UI.createLabel({
					color:"white",
					font : {fontFamily : 'Futura', fontSize : 16,},
					top: 20,
					left: 40
				});
				var nightOne = Ti.UI.createLabel({
					color:"white",
					font : {fontFamily : 'Futura', fontSize : 16,},
					top: 20,
					left: 120
				});
				var dayTwo = Ti.UI.createLabel({
					color: "white",
					font : {fontFamily : 'Futura', fontSize : 16,},
					top: 20,
					left: 230
				});
				var nightTwo = Ti.UI.createLabel({
					color: "white",
					font : {fontFamily : 'Futura', fontSize : 16,},
					top: 20,
					left: 300
				});
				var dayThree = Ti.UI.createLabel({
					color: "white",
					font : {fontFamily : 'Futura', fontSize : 16,}, 
					top: 20,
					left: 410
				});
				var nightThree = Ti.UI.createLabel({
					color: "white",
					font : {fontFamily : 'Futura', fontSize : 16,},
					top: 20,
					left: 480
				});
				var dayFour = Ti.UI.createLabel({
					color: "white",
					font : {fontFamily : 'Futura', fontSize : 16,},
					top: 20,
					left: 590
				});
				var nightFour = Ti.UI.createLabel({
					color: "white",
					font : {fontFamily : 'Futura', fontSize : 16,},
					top: 20,
					left: 660
				});
				
				var desc1 = Ti.UI.createLabel({
					color:"white",
					font : {fontFamily : 'Futura', fontSize : 12,},
					top: 40,
					left: 40,
					
					width: 60
				});
				var desc2 = Ti.UI.createLabel({
					color:"white",
					font : {fontFamily : 'Futura', fontSize : 12,},
					top: 40,
					left: 120,
					
					width: 60
				});
				var desc3 = Ti.UI.createLabel({
					color:"white",
					font : {fontFamily : 'Futura', fontSize : 12,},
					top: 40,
					left: 230,
					
					width: 60
				});
				var desc4 = Ti.UI.createLabel({
					color:"white",
					font : {fontFamily : 'Futura', fontSize : 12,},
					top: 40,
					left: 300,
					
					width: 60
				});
				var desc5 = Ti.UI.createLabel({
					color:"white",
					font : {fontFamily : 'Futura', fontSize : 12,},
					top: 40,
					left: 410,
					
					width: 60
				});
				var desc6 = Ti.UI.createLabel({
					color:"white",
					font : {fontFamily : 'Futura', fontSize : 12,},
					top: 40,
					left: 480,
					
					width: 60
				});
				var desc7 = Ti.UI.createLabel({
					color:"white",
					font : {fontFamily : 'Futura', fontSize : 12,},
					top: 40,
					left: 590,
					
					width: 60
				});
				var desc8 = Ti.UI.createLabel({
					color:"white",
					font : {fontFamily : 'Futura', fontSize : 12,},
					top: 40,
					left: 660,
					
					width: 60
				});
				

				
				
				
		//data for the day
	city.text = myWeather.city + ",";
	state.text = myWeather.state;
	weather.text =  myWeather.weather;
	temp.text =  myWeather.temperatureF + "°F",
	humidity.text = myWeather.humidity,
	feelLike.text = myWeather.feelsLikeF + "°F" + " | " + myWeather.feelsLikeC + "°C",
	time.text = myWeather.time,
	wind.text = myWeather.wind + "mph",
	gust.text = "With gusts up to " + myWeather.gust + "mph",
	windDir.text = myWeather.windDir,
	visibility.text = myWeather.visibility + " mi",
	dewpoint.text = myWeather.dewpoint + "°F",
	rain.text = "Rain today: " + myWeather.rain + "%";
	
	
	//data for the 3 day forecast
	//days of the week
		
	dayOne.text = myWeather.temperature[0].forecast;
	nightOne.text = myWeather.temperature[1].forecast,
	dayTwo.text = myWeather.temperature[2].forecast,
	nightTwo.text = myWeather.temperature[3].forecast,
	dayThree.text = myWeather.temperature[4].forecast,
	nightThree.text = myWeather.temperature[5].forecast,
	dayFour.text = myWeather.temperature[6].forecast,
	nightFour.text = myWeather.temperature[7].forecast,
	
	//weatherIcons for the days of the week
	
	
	
	desc1.text = myWeather.temperature[0].description,
	desc2.text = myWeather.temperature[1].description,
	desc3.text = myWeather.temperature[2].description,
	desc4.text = myWeather.temperature[3].description,
	desc5.text = myWeather.temperature[4].description,
	desc6.text = myWeather.temperature[5].description,
	desc7.text = myWeather.temperature[6].description,
	desc8.text = myWeather.temperature[7].description,
	
	
	forecastView.add(dayOne);
	forecastView.add(nightOne);
	forecastView.add(dayTwo);
	forecastView.add(nightTwo);
	forecastView.add(dayThree);
	forecastView.add(nightThree);
	forecastView.add(dayFour);
	forecastView.add(nightFour);
	
	forecastView.add(desc1);
	forecastView.add(desc2);
	forecastView.add(desc3);
	forecastView.add(desc4);
	forecastView.add(desc5);
	forecastView.add(desc6);
	forecastView.add(desc7);
	forecastView.add(desc8);

	
	//forecastView.add(icon);
	//forecastView.add(description);
	console.log(myWeather);	
	win.add(time);
	win.add(weather);
	
	

	
	
	
	
	
	win.add(rain);
	//Circle Adds
	win.add(tempCircle);
	tempCircle.add(videoPlayer);
	tempCircle.add(temp);
	windCircle.add(wind, windTxt);
	feelsLikeCircle.add(feelLike, feelLikeTxt);
	dewpointCircle.add(dewpoint, dewpointTxt);
	stateCityCircle.add(state, city);
	humidityCircle.add(humidity, humidityTxt);
	windDirCircle.add(windDir, windDirTxt);
	visibilityCircle.add(visibility, visibilityTxt);
	
//window adds Circles
win.add(windDirCircle);
win.add(forecastView);
win.add(humidityCircle);
win.add(dewpointCircle);
win.add(stateCityCircle);
win.add(feelsLikeCircle);
win.add(visibilityCircle);
win.add(windCircle);


//open window and export make ui function
win.open();
exports.makeUI = makeUI;
