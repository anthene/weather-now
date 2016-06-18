import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { InfoComponent } from './info.component';

@Component({
  template: `<div (click)="goBack()">Day Details Component</div>`
})
export class DayDetailsComponent extends InfoComponent {
  constructor(router: Router) {
    super(router);
  }
}