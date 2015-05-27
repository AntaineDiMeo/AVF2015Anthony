var api = require("api");
var build = require("buildUI");
var geo = require("geo");
//all my requires

//android if statement
if (Ti.Platform.osname === "android") {
	
	var win = Ti.UI.createWindow({
	
	orientationModes: [
	Titanium.UI.LANDSCAPE_LEFT,
	Titanium.UI.LANDSCAPE_RIGHT,
	Titanium.UI.PORTRAIT,
	],
	backgroundColor: "00CCCC",
	navBarHidden: true
});

	} else {
var win = Ti.UI.createWindow({
	statusBarStyle : Ti.UI.iPhone.StatusBar.LIGHT_CONTENT,
	orientationModes: [
	Titanium.UI.LANDSCAPE_LEFT,
	Titanium.UI.LANDSCAPE_RIGHT,
	Titanium.UI.PORTRAIT,
	],
	backgroundColor: "00CCCC",
	navBarHidden: true
});
}

var winImage = Ti.UI.createView({
	backgroundImage: "collage.jpg",
	width: pWidth,
	height: pHeight,
});
 
var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;

var itemCount = 50;

var topView = Ti.UI.createView({
	backgroundColor: "black",
	width: pWidth,
	height: 100,
	top: 0
});
var topView2 = Ti.UI.createView({
	backgroundColor: "black",
	width: pWidth,
	height: 100,
	top: 0
});
var bottomView = Ti.UI.createView({
	backgroundColor: "black",
	width: pWidth,
	height: 125,
	bottom: 0
});
var bottomView2 = Ti.UI.createView({
	backgroundColor: "black",
	width: pWidth,
	height: 125,
	bottom: 0
});


var location = Ti.UI.createView({
	width: 384,
	height: 125,
	borderColor: "99FFFFFF",
	borderWidth: 2,
	
});
var locationText = Ti.UI.createLabel({
	font : {fontFamily : 'futura', fontSize : 30,},
	color: "ffffff",
	text: "Use Location"
});


location.add(locationText);
bottomView.add(location);
//get geo button event listener
location.addEventListener("click", geo.getGeo);

var instaStory = Ti.UI.createLabel({
	text: "InstaStory",
	font : {fontFamily : 'Futura', fontSize : 70,},
	color: "FEFCF8"
});

var sports = Ti.UI.createView({
	width: pWidth,
	height: 100,
	backgroundColor: "99001F1F",
	top: 100,
	borderColor: "99FFFFFF",
	borderWidth: 1,
	category : "sports"
});
var sportsText = Ti.UI.createLabel({
	font : {fontFamily : 'Futura', fontSize : 40,},
	color: "#FEFCF8",
	text: "Sports",
	left: 50
});
var fashion = Ti.UI.createView({
	width: pWidth,
	height: 100,
	backgroundColor: "99001F1F",
	top: 200,
	borderColor: "99FFFFFF",
	borderWidth: 1
});
var fashionText = Ti.UI.createLabel({
	font : {fontFamily : 'Futura', fontSize : 40,},
	color: "#FEFCF8",
	text: "Fashion",
	left: 50
});
var beauty = Ti.UI.createView({
	width: pWidth,
	height: 100,
	backgroundColor: "99001F1F",
	top: 300,
	borderColor: "99FFFFFF",
	borderWidth: 1
});
var beautyText = Ti.UI.createLabel({
	font : {fontFamily : 'Futura', fontSize : 40,},
	color: "#FEFCF8",
	text: "Beauty",
	left: 50
});
var news = Ti.UI.createView({
	width: pWidth,
	height: 100,
	backgroundColor: "99001F1F",
	top: 400,
	borderColor: "99FFFFFF",
	borderWidth: 1
});
var newsText = Ti.UI.createLabel({
	font : {fontFamily : 'Futura', fontSize : 40,},
	color: "#FEFCF8",
	text: "News",
	left: 50
});
var tech = Ti.UI.createView({
	width: pWidth,
	height: 100,
	backgroundColor: "99001F1F",
	top: 500,
	borderColor: "99FFFFFF",
	borderWidth: 1
});
var techText = Ti.UI.createLabel({
	font : {fontFamily : 'Futura', fontSize : 40,},
	color: "#FEFCF8",
	text: "Technology",
	left: 50
});
var food = Ti.UI.createView({
	width: pWidth,
	height: 100,
	backgroundColor: "99001F1F",
	top: 600,
	borderColor: "99FFFFFF",
	borderWidth: 1
});
var foodText = Ti.UI.createLabel({
	font : {fontFamily : 'Futura', fontSize : 40,},
	color: "#FEFCF8",
	text: "Food",
	left: 50
});
var vGames = Ti.UI.createView({
	width: pWidth,
	height: 100,
	backgroundColor: "99001F1F",
	top: 700,
	borderColor: "99FFFFFF",
	borderWidth: 1
});
var vGamesText = Ti.UI.createLabel({
	font : {fontFamily : 'Futura', fontSize : 40,},
	color: "#FEFCF8",
	text: "Video Games",
	left: 50
});
var music = Ti.UI.createView({
	width: pWidth,
	height: 100,
	backgroundColor: "99001F1F",
	top: 800,
	borderColor: "99FFFFFF",
	borderWidth: 1
});
var musicText = Ti.UI.createLabel({
	font : {fontFamily : 'Futura', fontSize : 40,},
	color: "#FEFCF8",
	text: "Music",
	left: 50
});



winImage.add(topView2);
winImage.add(bottomView2);
winImage.add(topView);
winImage.add(bottomView);
topView.add(instaStory);
winImage.add(sports, fashion, beauty, news, tech, food, vGames, music);
sports.add(sportsText);
fashion.add(fashionText);
beauty.add(beautyText);
news.add(newsText);
tech.add(techText);
food.add(foodText);
vGames.add(vGamesText);
music.add(musicText);



	//all the button event listeners for the url
sports.addEventListener("click", function() {
//api first with search term, then build UI

api.myData("https://api.instagram.com/v1/tags/sports/media/recent?client_id=3da7bfe44aa24c68a4194004466803cf");
//build.buildUI;
});

fashion.addEventListener("click", function() {
	
	api.myData("https://api.instagram.com/v1/tags/fashion/media/recent?client_id=3da7bfe44aa24c68a4194004466803cf");
	// build.buildUI;
});

beauty.addEventListener("click", function() {
	
	api.myData("https://api.instagram.com/v1/tags/bikini/media/recent?client_id=3da7bfe44aa24c68a4194004466803cf");
	// build.buildUI;
});
news.addEventListener("click", function() {
	
	api.myData("https://api.instagram.com/v1/tags/420/media/recent?client_id=3da7bfe44aa24c68a4194004466803cf");
	// build.buildUI;
});

tech.addEventListener("click", function(){

	api.myData("https://api.instagram.com/v1/tags/tech/media/recent?client_id=3da7bfe44aa24c68a4194004466803cf");
	//build.buildUI;
});

food.addEventListener("click", function(){

	api.myData("https://api.instagram.com/v1/tags/fullsail/media/recent?client_id=3da7bfe44aa24c68a4194004466803cf");
	//build.buildUI;
});

vGames.addEventListener("click", function(){
	
	api.myData("https://api.instagram.com/v1/tags/videogames/media/recent?client_id=3da7bfe44aa24c68a4194004466803cf");
	//build.buildUI;
});

music.addEventListener("click", function(){
	
	api.myData("https://api.instagram.com/v1/tags/music/media/recent?client_id=3da7bfe44aa24c68a4194004466803cf");
	//build.buildUI;
});


win.add(winImage);


win.open();
