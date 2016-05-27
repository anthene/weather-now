var dict = {
	Thunderstorm: "Гроза",
	Drizzle: "Мелкий дождь",
	Rain: "Дождь",
	Snow: "Снег",
	Atmosphere: "Atmosphere",
	Clear: "Ясно",
	Clouds: "Облачно",
	Extreme: "Extreme",
	Additional: "Additional",
}

function setInnerHtml(elemId, value) {
	var elem = document.getElementById(elemId);
	
	if (elem)
		elem.innerHTML = value;
}

function replaceClass(elemId, oldClass, newClass) {
	var elem = document.getElementById(elemId);
	elem.classList.remove(oldClass);
	elem.classList.add(newClass);
}

function fillForm(data, prefix) {
	if (prefix === undefined)
		prefix = "";
		
	// setInnerHtml(prefix + "main", data.weather[0].main in dict ? dict[data.weather[0].main] : data.weather[0].main);
	setInnerHtml(prefix + "pic", "<img src=\"" + data.weather[0].main + ".png\"></img>");
	if (data.main) {
		setInnerHtml(prefix + "main.temp", Math.round(data.main.temp) + "°C");
		setInnerHtml(prefix + "pressure", Math.round(data.main.pressure*0.7500638) + " мм рт. ст.");
		setInnerHtml(prefix + "humidity", data.main.humidity) + "%";
	}
	else {
		setInnerHtml(prefix + "main.temp-range", Math.round(data.temp.min) + "°C.." + Math.round(data.temp.max) + "°C");
		setInnerHtml(prefix + "pressure", Math.round(data.pressure*0.7500638) + " мм рт. ст.");
	}
	// setInnerHtml(prefix + "pressure", Math.round(data.main.pressure*0.7500638) + " мм рт. ст.");
	// setInnerHtml(prefix + "wind.speed", data.wind.speed);
	// setInnerHtml(prefix + "sunrise", new Date(1000*data.sys.sunrise));
	// setInnerHtml(prefix + "sunset", new Date(1000*data.sys.sunset));
}

function getJson(callback, request) {
	var xhr = new XMLHttpRequest();

	xhr.open('GET', request, true);
	
	xhr.onreadystatechange = function () {
		if (xhr.readyState != 4) return;
		
		if (xhr.status === 200) {
			callback(JSON.parse(xhr.responseText));
		}
	}

	xhr.send();
}

function getWeatherData(callback) {
	getJson(callback, 'http://api.openweathermap.org/data/2.5/weather?id=524901&units=metric&appid=0da70d33c9a5dfaf3ded356599ea6929');
}

function getForecastData(callback) {
	getJson(callback, 'http://api.openweathermap.org/data/2.5/forecast/daily?id=524901&cnt=2&units=metric&appid=0da70d33c9a5dfaf3ded356599ea6929');
}

function startGetWeatherData() {
	setInterval(function () { getWeatherData(fillForm); }, 60000);
}

function setTime() {
	setInnerHtml("dt", new Date().toLocaleTimeString("ru"));
}

getWeatherData(function (data) {
	fillForm(data);
		
	var now = new Date().valueOf();
	if (1000 * data.sys.sunrise > now || 1000 * data.sys.sunset < now) {
		replaceClass("weather",  "background", "night-background");
		replaceClass("today",  "tod-background", "night-tod-background");
		replaceClass("tomorrow",  "tom-background", "night-tom-background");
	}
});
getForecastData(function (data) {
	fillForm(data.list[0], "tod-");
	fillForm(data.list[1], "tom-");
});
setTime();
setInterval(setTime, 1000);
//<!-- startGetWeatherData(); -->
