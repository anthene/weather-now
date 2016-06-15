interface Weather {
	weather: Array<{main:string}>;
}

export interface WeatherData extends Weather {
	main: { temp: number, pressure: number };
	sys: { sunrise: number, sunset: number };
}

export interface WeatherForecast extends Weather {
	temp: { min: number, max:number };
	pressure: number;
 }
