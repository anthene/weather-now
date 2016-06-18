import { Component } from '@angular/core';

import { WeatherData, NowData, ForecastData } from '../weather.data';

import { NowComponent } from '../weather-items/now.component';
import { TodComponent } from '../weather-items/tod.component';
import { TomComponent } from '../weather-items/tom.component';

@Component({
  directives: [NowComponent, TodComponent, TomComponent],
  templateUrl: "app/weather/weather.html"
})
export class WeatherComponent {
    weatherData: WeatherData;

    constructor() {
        const now = new NowData();

        now.time= "Сейчас";
        now.status= "Clear";
        now.nowTemp= 25;
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

        this.weatherData = {
            now: now,
            today: today,
            tomorrow: tomorrow
        }
    }
}
