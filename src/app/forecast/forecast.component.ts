import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { InfoComponent } from '../shared/info.component';
import { ForecastData } from '../shared/forecast-data.model';
import { OpenWeatherService } from '../shared/open-weather.service';

@Component({
  providers: [OpenWeatherService],
  styleUrls: ["styles/forecast.css"],
  templateUrl: "src/app/forecast/forecast.html"
})
export class ForecastComponent extends InfoComponent {
  forecast: ForecastData[];

  constructor(router: Router, weatherService: OpenWeatherService) {
    super(router);
    weatherService.getWeekForecast().then(forecast => this.forecast = forecast);
  }
}