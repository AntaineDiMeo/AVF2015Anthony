
		//check if network is online
		//ui require
		var ui = require("ui");
if (Ti.Network.online) {
var db = require("database");
//remote storage
	var cloud = require("cloud");
	cloud.loginCloud();

}else{
	alert("No Network conection.");
	//if no network collection
	//local storage
	var data = require("database");
	data.read();
}