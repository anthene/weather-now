import { WeatherItemData } from "./weather-item-data.model";

export class NowData implements WeatherItemData {
    time: string;
    status: string;
    pressure: number;

    nowTemp: number;

    temp() {
        return `${this.nowTemp}°C`
    }
}
