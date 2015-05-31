//read function
var read = function() {
	var db = Ti.Database.open("instaDB");
	var dbRows = db.execute("SELECT * FROM instaTBL"); //returns result set
	var dbArray = [];
	while(dbRows.isValidRow()){
		dbArray.push({
			username: dbRows.fieldByName("username"),
			profilePicture: dbRows.fieldByName("profilePicture"),
			images: dbRows.fieldByName("images"),
			caption: dbRows.fieldByName("caption"),
			
		});
		dbRows.next();
	}
	dbRows.close();
	db.close();
	
	//reuqire build ui
var build = require("buildUI");
build.buildUI(dbArray);
};
//save function
var save = function (instaInfo){
	console.log(instaInfo);
	
	var db = Ti.Database.open("instaDB");
	db.execute("CREATE TABLE IF NOT EXISTS instaTBL (id INTEGER PRIMARY KEY, username TEXT, profilePicture THUMB, images THUMB, caption TEXT)");
	db.execute("DELETE FROM instaTBL");
	for (i=0, j=instaInfo.length; i<j; i++) {
	
	db.execute("INSERT INTO instaTBL (username, profilePicture, images, caption) VALUES (?, ?, ?, ?)", 
	instaInfo[i].username, 
	instaInfo[i].profilePicture, 
	instaInfo[i].images, 
	instaInfo[i].caption); 
	}
	db.close();
	read();
};




exports.save = save;