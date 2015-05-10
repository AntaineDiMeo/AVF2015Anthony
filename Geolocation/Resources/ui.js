

var win = Ti.UI.createWindow({
	backgroundColor: "purple",
});
//platform height width
var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
//logo
var title = Ti.UI.createLabel({
	top: 50,
	text: "WeatherNow",
	color : '#70000000',
	font : {fontFamily: "futura", fontSize: 80,},
});
//background blur
var blurView = Ti.UI.createView({
	width: pWidth,
	height: pHeight,
	backgroundColor: "#30000000",
});
//left blur box
var leftView = Ti.UI.createView({
	width: 350,
	height: 550,
	bottom: 20,
	left: 20,
	borderRadius: 50,
	backgroundColor: "#50000000"
});
//right blur box
var rightView = Ti.UI.createView({
	width: 350,
	height:550,
	bottom: 20,
	right: 20,
	borderRadius: 50,
	backgroundColor:"#50000000"
});
//temperature image
var tempImage = Ti.UI.createImageView({
					top: 150,
					width: 425,
					height: 275,
					image: "cloudssun.png"
				});

//background loop clouds
var videoPlayer = Titanium.Media.createVideoPlayer({
	
	autoplay: true,
	
	mediaControlStyle: Titanium.Media.VIDEO_CONTROL_NONE, 
    scalingMode:Titanium.Media.VIDEO_SCALING_ASPECT_FILL,
    
    repeatMode: Titanium.Media.VIDEO_REPEAT_MODE_ONE,
   zIndex: 0,
});
	//orientation for the app
	Ti.Gesture.addEventListener("orientationchange", function(e){
  });
  
videoPlayer.url = "clouds.mp4";
win.add(videoPlayer);

/*
// check for network
var checkWifi = Ti.UI.createLabel({
	text: "Check Network",
});

var network = Ti.UI.createButton({
	backgroundColor: "#50000000",
	borderColor: "black",
	top: 0,
	height: 100,
	width: 250
});

var functionNetwork = function(){
	
	if (Titanium.Network.networkType === Titanium.Network.NETWORK_NONE) {
   Titanium.API.info(' no connection ');
   var alertDialog2 = Titanium.UI.createAlertDialog({
              title: 'WIFI',
              message: 'Your device is not connected',
              buttonNames: ['OK']
            });
            alertDialog2.show();
} else {
   Titanium.API.info(' connection present ');
    var alertDialog = Titanium.UI.createAlertDialog({
              title: 'WIFI',
              message: 'Your device is connected.',
              buttonNames: ['OK']
            });
            alertDialog.show();
}

};*/
//variables make ui function
var makeUI = function(myWeather) {
		
		//left side information
		var city = Ti.UI.createLabel({
					color : '#fff',
					font : {fontFamily : 'Futura', fontSize : 30,},
					text : "City",
					top:50
				});
		var state = Ti.UI.createLabel({
					color : 'white',
					font : {fontFamily : 'Futura', fontSize : 35,},
					text : "state",
					top: 100
				});
				
		var time = Ti.UI.createLabel({
					color : 'white',
					font : {fontFamily : 'Futura', fontSize : 30,},
					top: 200	
				});
		
		var weather = Ti.UI.createLabel({
					color : 'white',
					font : {fontFamily : "Futura", fontSize : 30,},
					text : "Weather",
					top: 300
				});
		
		var temp = Ti.UI.createLabel({
					color : '#80000000',
					font : {fontFamily : 'futura',  fontSize: 80,}
				});
				
		var humidity = Ti.UI.createLabel({
					color : 'white',
					font : {fontFamily : 'Futura', fontSize : 30,},
					top: 400
				});
		var feelLike = Ti.UI.createLabel({
					color : 'white',
					font : {fontFamily : 'Futura', fontSize : 30,},
					top: 500
				});
			//right side information
		var wind = Ti.UI.createLabel({
			color : 'white',
					font : {fontFamily : 'Futura', fontSize : 30,},
					top: 50,
				});
		var gust = Ti.UI.createLabel({
			color : 'white',
					font : {fontFamily : 'Futura', fontSize : 30,},
					top: 200,
				});
		var windDir = Ti.UI.createLabel({
					color : 'white',
					font : {fontFamily : 'Futura', fontSize : 35,},
					top: 100
				});
		
	var visibility = Ti.UI.createLabel({
					color : 'white',
					font : {fontFamily : 'Futura', fontSize : 30,},
					top: 300
				});
				var dewpoint = Ti.UI.createLabel({
					color : 'white',
					font : {fontFamily : 'Futura', fontSize : 30,},
					top: 400
				});
				var rain = Ti.UI.createLabel({
					color : 'white',
					font : {fontFamily : 'Futura', fontSize : 30,},
					top: 500
					
				});
		//data
	city.text = myWeather.city + ",";
	state.text = myWeather.state;
	weather.text =  "Sky: " + myWeather.weather;
	temp.text =  myWeather.temperatureF + "°F",
	humidity.text = "Humidity: " + myWeather.humidity,
	feelLike.text = "Feels like " + myWeather.feelsLikeF + "°F" + " | " + myWeather.feelsLikeC + "°C",
	time.text = myWeather.time,
	wind.text = "Wind speed is " + myWeather.wind + "mph",
	gust.text = "With gusts up to " + myWeather.gust + "mph",
	windDir.text = myWeather.windDir,
	visibility.text = "Visibility for " + myWeather.visibility + " mi",
	dewpoint.text = "Dewpoint is " + myWeather.dewpoint + "°F",
	rain.text = "Rain today: " + myWeather.rain + "%",
	
	//left view adds
	leftView.add(city);
	leftView.add(state);
	leftView.add(time);
	leftView.add(weather);
	leftView.add(feelLike);
	leftView.add(humidity);
	//right view adds
	rightView.add(wind);
	rightView.add(gust);
	rightView.add(windDir);
	rightView.add(visibility);
	rightView.add(dewpoint);
	rightView.add(rain);
	//temperature add
	tempImage.add(temp);
};
//window adds
win.add(blurView);
win.add(leftView);
win.add(rightView);
win.add(title);
win.add(tempImage);
//open window and export make ui function
win.open();
exports.makeUI = makeUI;
