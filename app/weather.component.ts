import { WeatherData, WeatherForecast } from "./weather";

export interface IWeatherComponent {
	getWeatherData(callback: (data: WeatherData) => void): void;
	getForecastData(callback: (data: Array<WeatherForecast>) => void): void;
}

export class WeatherComponent implements IWeatherComponent {
	private url = "http://api.openweathermap.org/data/2.5/";
	
	private static sendRequest<T>(request: string, callback: (data: T) => void) {
		const xhr = new XMLHttpRequest();
	
		xhr.open('GET', request, true);
		
		xhr.onreadystatechange = () => {
			if (xhr.readyState != 4) return;
			
			if (xhr.status === 200) {
				callback(JSON.parse(xhr.responseText));
			}
		}
	
		xhr.send();
	}
	
	getWeatherData(callback: (data: WeatherData) => void): void {
		const request = `${this.url}weather?id=524901&units=metric&appid=0da70d33c9a5dfaf3ded356599ea6929`;
		WeatherComponent.sendRequest(request, callback);
	}
	
	getForecastData(callback: (data: Array<WeatherForecast>) => void): void {
		const request = `${this.url}forecast/daily?id=524901&cnt=2&units=metric&appid=0da70d33c9a5dfaf3ded356599ea6929`;
		WeatherComponent.sendRequest(request, (forecast:{list:Array<WeatherForecast>}) => callback(forecast.list));
	}
}
