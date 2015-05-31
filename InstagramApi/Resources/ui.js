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
	backgroundColor: "9900CCCC",
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
console.log(pWidth);
var itemCount = 50;

var topView = Ti.UI.createView({
	backgroundColor: "99000000",
	width: pWidth,
	height: 100,
	top: 0
});
var topView2 = Ti.UI.createView({
	backgroundColor: "99000000",
	width: pWidth,
	height: 100,
	top: 0
});
var bottomView = Ti.UI.createView({
	backgroundColor: "99000000",
	width: pWidth,
	height: 125,
	bottom: 0
});
var bottomView2 = Ti.UI.createView({
	backgroundColor: "99000000",
	width: pWidth,
	height: 125,
	bottom: 0
});


var location = Ti.UI.createView({
	width: 275,
	height: 125,
	backgroundColor: "99383A3A",
	borderColor: "black",
	borderWidth: 4,
	
});
var locationText = Ti.UI.createLabel({
	font : {fontFamily : 'futura', fontSize : 40,},
	color: "ffffff",
	text: "Use Location"
});


var instaStory = Ti.UI.createLabel({
	text: "InstaStory",
	font : {fontFamily : 'Futura', fontWeight: "Bold", fontSize : 72,},
	color: "FEFCF8",
});

var sports = Ti.UI.createView({
	width: pWidth,
	height: 100,
	backgroundColor: "99001F1F",
	top: 100,
	borderColor: "black",
	borderWidth: 2,
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
	borderColor: "black",
	borderWidth: 2
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
	borderColor: "black",
	borderWidth: 2
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
	borderColor: "black",
	borderWidth: 2
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
	borderColor: "black",
	borderWidth: 2
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
	borderColor: "black",
	borderWidth: 2
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
	borderColor: "black",
	borderWidth: 2
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
	borderColor: "black",
	borderWidth: 2
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
	
	api.myData("https://api.instagram.com/v1/tags/selfie/media/recent?client_id=3da7bfe44aa24c68a4194004466803cf");
	// build.buildUI;
});
news.addEventListener("click", function() {
	
	api.myData("https://api.instagram.com/v1/tags/news/media/recent?client_id=3da7bfe44aa24c68a4194004466803cf");
	// build.buildUI;
});

tech.addEventListener("click", function(){

	api.myData("https://api.instagram.com/v1/tags/technology/media/recent?client_id=3da7bfe44aa24c68a4194004466803cf");
	//build.buildUI;
});

food.addEventListener("click", function(){

	api.myData("https://api.instagram.com/v1/tags/food/media/recent?client_id=3da7bfe44aa24c68a4194004466803cf");
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

location.add(locationText);
bottomView.add(location);
//get geo button event listener
location.addEventListener("click", function() {
	//api.myData("https://api.instagram.com/v1/tags/life/media/recent?client_id=3da7bfe44aa24c68a4194004466803cf&lat=28.53843&lng=-81.37896");
	geo.getGeo();
});


win.add(winImage);


win.open();
