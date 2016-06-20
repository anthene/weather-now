import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { InfoComponent } from './info.component';
import { OpenWeatherService } from "../weather-services/open-weather.service";
import { ForecastData } from "../weather.data"

@Component({
  providers: [OpenWeatherService],
  styleUrls: ["styles/forecast.css"],
  templateUrl: "app/weather/forecast.html"
})
export class ForecastComponent extends InfoComponent {
  forecast: ForecastData[];

  constructor(router: Router, weatherService: OpenWeatherService) {
    super(router);
    weatherService.getWeekForecast().then(forecast => this.forecast = forecast);
  }
}