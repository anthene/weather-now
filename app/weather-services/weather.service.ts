import { WeatherData, ForecastData } from "../weather.data"

export interface WeatherService {
    getWeatherData(): Promise<WeatherData>;
    getWeekForecast(): Promise<ForecastData[]>;
}
