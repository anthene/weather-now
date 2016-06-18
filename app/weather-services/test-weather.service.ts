import { Injectable } from '@angular/core';

import { WeatherData, NowData, ForecastData } from "../weather.data"
import { WeatherService } from "./weather.service"

@Injectable()
export class TestWeatherService implements WeatherService {
    getWeatherData(): Promise<WeatherData> {
        const now = new NowData();
        now.time= "Сейчас";
        now.status= "Clear";
        now.nowTemp= 24;
        now.pressure= 765;

        const today = new ForecastData();
        today.time= "Сегодня";
        today.status= "Clouds";
        today.minTemp= 26;
        today.maxTemp= 27;
        today.pressure= 766;

        const tomorrow = new ForecastData();
        tomorrow.time= "Завтра";
        tomorrow.status= "Rain";
        tomorrow.minTemp= 28;
        tomorrow.maxTemp= 29;
        tomorrow.pressure= 767;

        return new Promise<WeatherData>((resolve, reject) => {
            resolve({
                now: now,
                today: today,
                tomorrow: tomorrow
            });
        });

    }
}
