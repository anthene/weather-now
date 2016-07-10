import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { WeatherData } from "./weather-data.model";
import { NowData } from "./now-data.model";
import { ForecastData } from "./forecast-data.model";
import { DayDetailData } from "./day-detail-data.model";
import { WeatherService } from "./weather.service";

@Injectable()
export class OpenWeatherService implements WeatherService {
    private static url = "http://api.openweathermap.org/data/2.5/";

    constructor(private http: Http) {
    }

    getWeatherData(): Promise<WeatherData> {
        return this.http.get(`${OpenWeatherService.url}weather?id=524901&units=metric&appid=0da70d33c9a5dfaf3ded356599ea6929`)
            .toPromise()
            .then(res => this.http.get(`${OpenWeatherService.url}forecast/daily?id=524901&cnt=2&units=metric&appid=0da70d33c9a5dfaf3ded356599ea6929`)
                    .toPromise()
                    .then(res2 => {
                        const json = res2.json();
                        return {
                            now: toNowData(res.json()),
                            today: toForecastData(json.list[0], "Сегодня"),
                            tomorrow: toForecastData(json.list[1], "Завтра")
                        }
                    }));
    }

    getWeekForecast(): Promise<ForecastData[]> {
        return this.http.get(`${OpenWeatherService.url}forecast/daily?id=524901&cnt=7&units=metric&appid=0da70d33c9a5dfaf3ded356599ea6929`)
                    .toPromise()
                    .then(res => {
                        const json = res.json();
                        return json.list.map((item: any) => toForecastData(item));
                    });
    }

    getDayDetails(): Promise<DayDetailData[]> {
        return this.http.get(`${OpenWeatherService.url}forecast?id=524901&cnt=16&units=metric&appid=0da70d33c9a5dfaf3ded356599ea6929`)
                    .toPromise()
                    .then(res => {
                        const json = res.json();
                        return json.list.map((item: any) => toDayDetailsData(item));
                    });
    }

    // todo: catch exception
}

function toNowData(json: any): NowData {
    const now = new NowData();
    now.time = "Сейчас";
    now.status = json.weather[0].main;
    now.nowTemp = json.main.temp;
    now.pressure = json.main.pressure;
    return now;
}

function toForecastData(json: any, time?: string): ForecastData {
    if (!time) {
        time = new Date(json.dt*1000).toDateString();
    }
    const forecast = new ForecastData();
    forecast.time = time;
    forecast.status = json.weather[0].main;
    forecast.minTemp = json.temp.min;
    forecast.maxTemp = json.temp.max;
    forecast.pressure = json.pressure;
    return forecast;
}

function toDayDetailsData(json: any): DayDetailData {
    const now = new DayDetailData();
    now.time = new Date(json.dt*1000).toLocaleTimeString();
    now.status = json.weather[0].main;
    now.nowTemp = json.main.temp;
    now.pressure = json.main.pressure;
    return now;
}
