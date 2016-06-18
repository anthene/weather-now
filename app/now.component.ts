import { Component, Input } from '@angular/core';

import { WeatherItemData } from './weather.data';

abstract class WeatherItemComponent {
  @Input()
  data: WeatherItemData;

  constructor(public id: string) {

  }
}

@Component({
  selector: 'now',
  templateUrl: "app/weather-item-data.html"
})
export class NowComponent extends WeatherItemComponent {
  constructor() {
    super("now");
  }
}

@Component({
  selector: 'tod',
  templateUrl: "app/weather-item-data.html"
})
export class TodComponent extends WeatherItemComponent {
  constructor() {
    super("tod");
  }
}

@Component({
  selector: 'tom',
  templateUrl: "app/weather-item-data.html"
})
export class TomComponent extends WeatherItemComponent {
  constructor() {
    super("tom");
  }
}
