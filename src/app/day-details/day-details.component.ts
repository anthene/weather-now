import { Component } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';

import { InfoComponent } from '../shared/info.component';
import { DayDetailData } from "../shared/day-detail-data.model";
import { OpenWeatherService } from '../shared/open-weather.service';

@Component({
  providers: [OpenWeatherService],
  styleUrls: ["styles/day-details.css", "styles/item.css"],
  templateUrl: "src/app/day-details/day-details.html"
})
export class DayDetailsComponent extends InfoComponent {
  dayDetails: DayDetailData[];

  constructor(router: Router, routeParams: RouteParams, weatherService: OpenWeatherService) {
    super(router);
    weatherService.getDayDetails().then(dayDetails => this.dayDetails = dayDetails);
  }
}