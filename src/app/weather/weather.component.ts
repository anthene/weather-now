import { Component } from '@angular/core'; 

import { WeatherData } from '../shared/weather-data.model';
import { NowData } from '../shared/now-data.model';
import { ForecastData } from '../shared/forecast-data.model';
import { OpenWeatherService } from '../shared/open-weather.service';

import { NowComponent } from './now.component';
import { TodComponent } from './tod.component';
import { TomComponent } from './tom.component';
//import { TestWeatherService } from "../weather-services/test-weather.service";

@Component({
  directives: [NowComponent, TodComponent, TomComponent],
  providers: [OpenWeatherService],
  //styleUrls: ["styles/weather.css", "styles/details.css"],
  templateUrl: "src/app/weather/weather.html"
})
export class WeatherComponent {
    weatherData: WeatherData;

    constructor(weatherService: OpenWeatherService) {
         weatherService.getWeatherData().then(weatherData => this.weatherData = weatherData);
    }
}
