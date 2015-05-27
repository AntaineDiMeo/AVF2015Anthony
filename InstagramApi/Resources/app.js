/*
var ui = require("ui");

if (Ti.Network.online) {
	//var cloud = require("cloud");
	//cloud.loginCloud();
	var geo = require("geo");
	geo.getGeo();
}else{
	alert("No Network conection.");
	//var data = require("database");
	//data.read();
}

*/


	

		//check if network is online
if (Ti.Network.online) {
//ui require
var ui = require("ui");
//remote storage
	var cloud = require("cloud");
	cloud.loginCloud();

}else{
	alert("No Network conection.");
	//if no network collection
	//remote storage
	var data = require("database");
	data.read();
}