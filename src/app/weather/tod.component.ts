import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { WeatherItemComponent } from './weather-item.component';

@Component({
  selector: 'tod',
  templateUrl: "src/app/weather/weather-item-data.html"
})
export class TodComponent extends WeatherItemComponent {
  constructor(router: Router) {
    super("tod", router);
  }

  go(): void{
    this.router.navigate(['Details', { day: "today" }]);
  }
}
