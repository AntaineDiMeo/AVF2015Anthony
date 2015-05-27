//my data function
var myData = function(url, lng, lat) {
	// var url = "https://api.instagram.com/v1/tags/comedy/media/recent?client_id=3da7bfe44aa24c68a4194004466803cf";
	
	var xhr = Ti.Network.createHTTPClient();
		xhr.onload = function(e){
		var json = JSON.parse(this.responseText);
		
		//console.log(JSON.stringify(json.data[0].tags));
		var dataArray = [];

for (var i=0, j=json.data.length; i<j; i++){
	//myinsta 
			var myInsta = {
				url : url,
			username: json.data[i].caption.from.username,
			profilePicture: json.data[i].caption.from.profile_picture,
			images: json.data[i].images.standard_resolution.url,
			caption: json.data[i].caption.text,
		};
	
		dataArray.push(myInsta);
}
//reuqire build ui
var build = require("buildUI");
build.buildUI(dataArray);
//require database
var db = require("database");
db.save(myInsta);
//require cloud
var cloud = require("cloud");
cloud.save(myInsta);
		};
xhr.onerror = function(e) {
			
};
		timeout : 5000,
	
	
	xhr.open("GET", url);
	xhr.send();
};
exports.myData = myData;
