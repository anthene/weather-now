import { IDocument } from "./idocument";
import { IWeatherComponent } from "./weather.component";

interface Weather {
	weather: Array<{main:string}>;
}

interface WeatherData extends Weather {
	main: { temp: number, pressure: number };
	sys: { sunrise: number, sunset: number };
}

interface WeatherForecast extends Weather {
	temp: { min: number, max:number };
	pressure: number;
 }

export class LoadDataComponent {
	constructor(private doc: IDocument, private weatherComponent: IWeatherComponent) {
	}
	
	loadData() {
		// todo: what's wrong???
		this.weatherComponent.getWeatherData(data => LoadDataComponent.setWeatherData(this, data));
		this.weatherComponent.getForecastData(data => LoadDataComponent.setForecastData(this, data.list));
		LoadDataComponent.setTime(this)
		setInterval(() => LoadDataComponent.setTime(this), 1000);
	}
	
	private static setWeatherData(mainComponent: LoadDataComponent, data: WeatherData) {
		const now = new Date().valueOf();
		if (1000 * data.sys.sunrise > now || 1000 * data.sys.sunset < now) {
			mainComponent.replaceClass("weather",  "background", "night-background");
			mainComponent.replaceClass("today",  "tod-background", "night-tod-background");
			mainComponent.replaceClass("tomorrow",  "tom-background", "night-tom-background");
		}

		mainComponent.fillNow(data);
	}
	
	private static setForecastData(mainComponent: LoadDataComponent, data: Array<WeatherForecast>) {
		mainComponent.fillDays(data[0], "tod-");
		mainComponent.fillDays(data[1], "tom-");
	}
	
	private static setTime(loadDataComponent: LoadDataComponent) {
		loadDataComponent.setInnerHtml("dt", new Date().toLocaleTimeString("ru"));
	}
	
	private fillDays(data: WeatherForecast, prefix: string) {
		// setInnerHtml(prefix + "main", data.weather[0].main in dict ? dict[data.weather[0].main] : data.weather[0].main);

		this.setInnerHtml(prefix + "main.temp-range", Math.round(data.temp.min) + "°C.." + Math.round(data.temp.max) + "°C");
		this.setInnerHtml(prefix + "pressure", Math.round(data.pressure*0.7500638) + " мм рт. ст.");
		this.setInnerHtml(prefix + "pic", "<img src=\"" + data.weather[0].main + ".png\"></img>");

		// setInnerHtml(prefix + "pressure", Math.round(data.main.pressure*0.7500638) + " мм рт. ст.");
		// setInnerHtml(prefix + "wind.speed", data.wind.speed);
		// setInnerHtml(prefix + "sunrise", new Date(1000*data.sys.sunrise));
		// setInnerHtml(prefix + "sunset", new Date(1000*data.sys.sunset));
	}
	
	private fillNow(data: WeatherData) {
		const prefix = "";
		this.setInnerHtml(prefix + "main.temp", Math.round(data.main.temp) + "°C");
		this.setInnerHtml(prefix + "pressure", Math.round(data.main.pressure*0.7500638) + " мм рт. ст.");
		// this.setInnerHtml(prefix + "humidity", data.main.humidity + "%");

		this.setInnerHtml(prefix + "pic", "<img src=\"" + "night-" + data.weather[0].main + ".png\"></img>");
	}
	
	private setInnerHtml(elemId: string, value: string) {
		const elem = this.doc.getElementById(elemId);
		
		if (elem)
			elem.innerHTML = value;
	}
	
	private replaceClass(elemId: string, oldClass: string, newClass: string) {
		const elem = this.doc.getElementById(elemId);
		elem.classList.remove(oldClass);
		elem.classList.add(newClass);
	}
}
