import { WeatherData } from "../weather.data"

export interface WeatherService {
    getWeatherData(): Promise<WeatherData>;
}
