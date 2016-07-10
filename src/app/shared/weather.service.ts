import { WeatherData } from "./weather-data.model"
import { ForecastData } from "./forecast-data.model"
import { DayDetailData } from "./day-detail-data.model";

export interface WeatherService {
    getWeatherData(): Promise<WeatherData>;
    getWeekForecast(): Promise<ForecastData[]>;
    getDayDetails(): Promise<DayDetailData[]>;
}
