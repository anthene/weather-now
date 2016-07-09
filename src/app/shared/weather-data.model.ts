import { NowData } from "./now-data.model"
import { ForecastData } from "./forecast-data.model"

export interface WeatherData {
    now: NowData,
    today: ForecastData,
    tomorrow: ForecastData
}