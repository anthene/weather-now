import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { InfoComponent } from './info.component';

@Component({
  template: `<div (click)="goBack()">Forecast</div>`
})
export class ForecastComponent extends InfoComponent {
  constructor(router: Router) {
    super(router);
  }
}