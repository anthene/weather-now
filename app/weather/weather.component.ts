import { Component } from '@angular/core';

import { WeatherData, NowData, ForecastData } from '../weather.data';

import { NowComponent } from '../weather-items/now.component';
import { TodComponent } from '../weather-items/tod.component';
import { TomComponent } from '../weather-items/tom.component';

import { WeatherService, TestWeatherService } from "../weather-services/weather.service"

@Component({
  directives: [NowComponent, TodComponent, TomComponent],
  providers: [TestWeatherService],
  templateUrl: "app/weather/weather.html"
})
export class WeatherComponent {
    weatherData: WeatherData;

    constructor(weatherService: TestWeatherService) {
        this.weatherData = weatherService.getWeatherData();
    }
}
