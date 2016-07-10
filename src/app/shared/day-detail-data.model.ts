import { WeatherItemData } from "./weather-item-data.model";

export class DayDetailData implements WeatherItemData {
    time: string;
    status: string;
    pressure: number;

    nowTemp: number;

    temp() {
        return `${this.nowTemp}°C`
    }
}
