import { Component, Input } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { WeatherItemData } from '../weather.data';

export abstract class WeatherItemComponent {
  @Input()
  data: WeatherItemData;

  constructor(public id: string, protected router: Router) {

  }

  abstract go(): void;
}
