import { Component } from '@angular/core'; 

import { WeatherData, NowData, ForecastData } from '../weather.data';

import { NowComponent } from '../weather-items/now.component';
import { TodComponent } from '../weather-items/tod.component';
import { TomComponent } from '../weather-items/tom.component';

import { OpenWeatherService } from "../weather-services/open-weather.service";
//import { TestWeatherService } from "../weather-services/test-weather.service";

@Component({
  directives: [NowComponent, TodComponent, TomComponent],
  providers: [OpenWeatherService],
  templateUrl: "app/weather/weather.html"
})
export class WeatherComponent {
    weatherData: WeatherData;

    constructor(weatherService: OpenWeatherService) {
         weatherService.getWeatherData().then(weatherData => this.weatherData = weatherData);
    }
}
