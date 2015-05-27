//cloud require
var Cloud = require("ti.cloud");
Cloud.debug = true;

var userID;

//login cloud function
var loginCloud = function() {
	Cloud.Users.login({
		login: "admin",
		password: "admin",
	}, function(e) {
		console.log(e);
		if (e.success) {
			
			//userID = e.users[0].id;
		} else {
			alert("Error" + e.message);
		}
	});
};
//save function cloud
var save = function(dbArray) {
		Cloud.Objects.create({
			classname: "myInsta",
			fields: {
				username: dbArray.username,
				profilePicture: dbArray.profilePicture,
				images: dbArray.images,
				caption: dbArray.caption,
				 
			}
		}, function(e) {
			if (e.success) {
				console.log("cloud saved");
			} else {
				alert("Data not saved");
			}
		 });
		
		};
	 
exports.loginCloud = loginCloud;
exports.save = save;
