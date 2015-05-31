var api = require("api");
//get the data function with build UI
//android if statement
	var buildUI = function(myInsta) {
		if (Ti.Platform.osname === "android") {
		var dataWindow = Ti.UI.createWindow({
			layout: "horizontal",
			backgroundColor: "black",
			
		});
		} else {
			var dataWindow = Ti.UI.createWindow({
			layout: "horizontal",
			backgroundColor: "black",
			statusBarStyle : Ti.UI.iPhone.StatusBar.LIGHT_CONTENT,
		});
		}
			
var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
//all the adds to the window
		var backButton = Ti.UI.createView({
			backgroundImage: "home.png",
			width: 70,
			height: 70,
				bottom:10,
				left: 10
		});
	
		var circle = Ti.UI.createView({
			backgroundColor: "99606161",
			width: 75,
			height: 75,
			borderRadius: 37.5,
			borderColor: "#222222",
		});
		var instaStory = Ti.UI.createLabel({
		text: "InstaStory",	
		font : {fontFamily : 'Futura', fontWeight: "Bold", fontSize : 72,},
		color: "FEFCF8",
	
});

	

var feedView = Ti.UI.createView({
			height: 100,
			width:pWidth,
			top: 0,
			borderColor: "99ffffff",
			backgroundColor: "50000000",
		});
		var scrollView = Ti.UI.createScrollView({
			layout: "vertical",
			width: pWidth,
			height: pHeight - feedView.height,
			showVerticalScrollIndicator : true
		});
		
		//buildui window feed
		for (i=0; i < myInsta.length; i++) {
			
		var line = Ti.UI.createView({
			top: 30,
			width: pWidth,
			height: 2,
			borderColor: "99ffffff",
			backgroundColor: "black"
		});
			var usernameView = Ti.UI.createView({
				width: pWidth,
				height: 100,
				top: 30
			});
		var username = Ti.UI.createLabel({
			top: 10,
			left: 90,
			text: myInsta[i].username,
			font : {fontFamily : 'futura', fontSize : 30,},
			color: "ffffff"
		});
		var imageView = Ti.UI.createImageView({
			top: 0,
			left: 10,
			width: 70,
			height: 70,
			borderRadius: 25,
			borderColor: "black",
			image: myInsta[i].profilePicture,
		});
		var images = Ti.UI.createImageView({
			top: 0,
			height: 650,
			width: 748,
			image: myInsta[i].images,
			bordercolor: "black",
			borderWidth: "2"
		});
		var caption = Ti.UI.createLabel({
			top: 20,
			left: 10,
			text: myInsta[i].caption,
			font : {fontFamily : 'futura', fontSize : 20},
			color: "#B2E0F0" 
		});
		
		
		
		scrollView.add(usernameView);
		usernameView.add(imageView);
		usernameView.add(username);

		scrollView.add(images);
		scrollView.add(caption);
		scrollView.add(line);
		}
		
		
		
		
		
		
		//data adds
		
		
//open data window
dataWindow.add(feedView);

feedView.add(instaStory);
feedView.add(backButton);
backButton.add(circle);
dataWindow.add(scrollView);
		dataWindow.open();
//close data window
//back button to go back to the home page
		backButton.addEventListener("click", function(){
		dataWindow.close();
	  });
	 };
exports.buildUI = buildUI;