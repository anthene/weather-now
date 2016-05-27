import { WeatherComponent } from "./weather.component";
import { LoadDataComponent } from "./load.data.component";

new LoadDataComponent(document, new WeatherComponent()).loadData();
