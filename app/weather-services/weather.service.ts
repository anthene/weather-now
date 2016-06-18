import { Injectable } from '@angular/core';

import { WeatherData, NowData, ForecastData } from "../weather.data"

@Injectable()
export abstract class WeatherService {
    abstract getWeatherData(): WeatherData;
}

@Injectable()
export class TestWeatherService extends WeatherService {
    getWeatherData(): WeatherData {
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

        return {
            now: now,
            today: today,
            tomorrow: tomorrow
        }

    }
}