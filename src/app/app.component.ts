import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { WeatherComponent } from './weather/weather.component';
import { ForecastComponent } from './forecast/forecast.component';
import { DayDetailsComponent } from './day-details/day-details.component';

@Component({
  selector: 'weather',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS],
  template: "<router-outlet></router-outlet>"
})
@RouteConfig([
    { path: '/', name: 'Weather', component: WeatherComponent },
    { path: '/forecast', name: 'Forecast', component: ForecastComponent },
    { path: '/:day', name: 'Details', component: DayDetailsComponent }
])
export class AppComponent {
}
