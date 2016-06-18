export interface WeatherItemData {
    time: string;
    status: string;
    pressure: number;
    temp(): string;
}

export class NowData implements WeatherItemData {
    time: string;
    status: string;
    pressure: number;

    nowTemp: number;

    temp() {
        return `${this.nowTemp}°C`
    }
}

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

export interface WeatherData {
    now: NowData,
    today: ForecastData,
    tomorrow: ForecastData
}