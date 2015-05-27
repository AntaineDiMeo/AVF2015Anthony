
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
			width: 75,
			height: 75,
				bottom:3,
			
		});
	
		var reload = Ti.UI.createButton({
			backgroundImage: "reload.png",
			color: 'black',
     		systemButton : Titanium.UI.iPhone.SystemButton.REFRESH,
			width: 60,
			height: 60,
			bottom:12,
			left: 10,
			
		});
	//reload.addEventLister("click", function() {
		
	//});

var feedView = Ti.UI.createView({
			height: 100,
			width:pWidth,
			top: 0,
			backgroundColor: "99000000",
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
			top: 25,
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
			width: pWidth,
			image: myInsta[i].images,
			bordercolor: "black",
			borderWidth: "2"
		});
		var caption = Ti.UI.createLabel({
			top: 15,
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

feedView.add(reload);
feedView.add(backButton);
dataWindow.add(scrollView);
		dataWindow.open();
//close data window
//back button to go back to the home page
		backButton.addEventListener("click", function(){
		dataWindow.close();
	  });
	 };
exports.buildUI = buildUI;