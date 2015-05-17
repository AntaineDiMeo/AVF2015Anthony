var read = function() {
	var db = Ti.Database.open("weatherDB");
	var dbRows = db.execute("SELECT * FROM weatherTBL"); //returns result set
	var dbArray = [];
	while(dbRows.isValidRow()){
		dbArray.push({
			city: dbRows.fieldByName("city"),
			state: dbRows.fieldByName("state"),
			weather: dbRows.fieldByName("weather"),
			temperatureF: dbRows.fieldByName("temperatureF"),
			temperatureC: dbRows.fieldByName("temperatureC"),
			humidity: dbRows.fieldByName("humidity"),
			feelsLikeF: dbRows.fieldByName("feelsLikeF"),
			feelsLikeC: dbRows.fieldByName("feelsLikeC"),
			time: dbRows.fieldByName("time"),
			wind: dbRows.fieldByName("wind"),
			gust: dbRows.fieldByName("gust"),
			windDir: dbRows.fieldByName("windDir"),
			visibility: dbRows.fieldByName("visibility"),
			dewpoint: dbRows.fieldByName("dewpoint"),
			rain: dbRows.fieldByName("rain"),
			forecast: dbRows.fieldByName("forecast"),
			icon: dbRows.fieldByName("icon"),
			description: dbRows.fieldByName("description"),
		});
		dbRows.next();
	}
	dbRows.close();
	db.close();
	
	var ui = require("ui");
	ui.makeUI(dbArray);
};

var save = function (weatherInfo){
	console.log(weatherInfo);
	
	var db = Ti.Database.open("weatherDB");
	db.execute("CREATE TABLE IF NOT EXISTS weatherTBL (id INTEGER PRIMARY KEY, city TEXT, state TEXT, weather TEXT, temperatureF TEXT, temperatureC TEXT, humidity TEXT, feelsLikeF TEXT, feelsLikeC TEXT, time TEXT, wind TEXT, gust TEXT, windDir TEXT, visibility TEXT, dewpoint TEXT, rain TEXT, forecast TEXT, icon IMG, description TEXT)");
	//db.execute("DELETE FROM redditTBL");
	for (i=0, j=weatherInfo.length; i<j; i++){
		
	
	db.execute("INSERT INTO weatherTBL (city, state, weather, temperatureF, temperatureC, humidity, feelsLikeF, feelsLikeC, time, wind, gust, windDir, visbility, dewpoint, rain, forecast, icon, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", weatherInfo[i].city, weatherInfo[i].state, weatherInfo[i].weather, weatherInfo[i].temperatureF, weatherInfo[i].temperatureC, weatherInfo[i].humidity, weatherInfo[i].feelsLikeF, weatherInfo[i].feelsLikeC, weatherInfo[i].time, weatherInfo[i].wind, weatherInfo[i].gust, weatherInfo[i].windDir, weatherInfo[i].visbility, weatherInfo[i].dewpoint, weatherInfo[i].rain, weatherInfo[i].forecast, weatherInfo[i].icon, weatherInfo[i].description);  
	}
	db.close();
	read();
};


exports.save = save;