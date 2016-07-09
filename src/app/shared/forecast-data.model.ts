import { WeatherItemData } from "./weather-item-data.model";

export class ForecastData implements WeatherItemData {
    time: string;
    status: string;
    pressure: number;

    minTemp: number;
    maxTemp: number;

    temp() {
        return `${this.minTemp}°C..${this.maxTemp}°C`
    }
}
