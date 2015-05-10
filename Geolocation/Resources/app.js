//ui file require
var ui = require("ui");
//check for network
if (Ti.Network.online) {
	//geo file require
	var geo = require("geo");
	geo.getGeo();
	

} else {
	//network not connected
	alert("Network connection needed. Please check your settings.");
};

