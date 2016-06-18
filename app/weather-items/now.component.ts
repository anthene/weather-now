import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { WeatherItemComponent } from './weather-item.component';

@Component({
  selector: 'now',
  templateUrl: "app/weather-items/weather-item-data.html"
})
export class NowComponent extends WeatherItemComponent {
  constructor(router: Router) {
    super("now", router);
  }

  go(): void{
    this.router.navigate(['Forecast']);
  }
}
