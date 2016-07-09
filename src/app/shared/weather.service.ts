import { WeatherData } from "./weather-data.model"
import { ForecastData } from "./forecast-data.model"

export interface WeatherService {
    getWeatherData(): Promise<WeatherData>;
    getWeekForecast(): Promise<ForecastData[]>;
}
