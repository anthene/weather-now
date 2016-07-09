import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { WeatherItemComponent } from './weather-item.component';

@Component({
  selector: 'tom',
  templateUrl: "src/app/weather/weather-item-data.html"
})
export class TomComponent extends WeatherItemComponent {
  constructor(router: Router) {
    super("tom", router);
  }

  go(): void{
    this.router.navigate(['Details', { day: "tomorrow" }]);
  }
}
