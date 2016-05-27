function Controller() {
	var _this = this;
	var nightModePrefix = "";
	
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
	
	var setInnerHtml = function (elemId, value) {
		var elem = document.getElementById(elemId);
		
		if (elem)
			elem.innerHTML = value;
	}
	
	var replaceClass = function (elemId, oldClass, newClass) {
		var elem = document.getElementById(elemId);
		elem.classList.remove(oldClass);
		elem.classList.add(newClass);
	}
	
	var fillForm = function (data, prefix) {
		if (prefix === undefined)
			prefix = "";
			
		// setInnerHtml(prefix + "main", data.weather[0].main in dict ? dict[data.weather[0].main] : data.weather[0].main);
		setInnerHtml(prefix + "pic", "<img src=\"" + nightModePrefix + data.weather[0].main + ".png\"></img>");
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
	
	var getJson = function (callback, request) {
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
	
	this.getWeatherData = function () {
		getJson(function (data) {
			var now = new Date().valueOf();
			if (1000 * data.sys.sunrise > now || 1000 * data.sys.sunset < now) {
				nightModePrefix = "night-";
				replaceClass("weather",  "background", "night-background");
				replaceClass("today",  "tod-background", "night-tod-background");
				replaceClass("tomorrow",  "tom-background", "night-tom-background");
			}

			fillForm(data);
		}, 'http://api.openweathermap.org/data/2.5/weather?id=524901&units=metric&appid=0da70d33c9a5dfaf3ded356599ea6929');
	}
	
	this.getForecastData = function () {
		getJson(function (data) {
			fillForm(data.list[0], "tod-");
			fillForm(data.list[1], "tom-");
		}, 'http://api.openweathermap.org/data/2.5/forecast/daily?id=524901&cnt=2&units=metric&appid=0da70d33c9a5dfaf3ded356599ea6929');
	}
	
	function startGetWeatherData() {
		setInterval(function () { _this.getWeatherData(fillForm); }, 60000);
	}
	
	this.setTime = function () {
		setInnerHtml("dt", new Date().toLocaleTimeString("ru"));
	}
}

var controller = new Controller();

controller.getWeatherData();
controller.getForecastData();
controller.setTime();
setInterval(controller.setTime, 1000);
//<!-- controller.startGetWeatherData(); -->
