// todo: think on abstract class
export interface WeatherItemData {
    time: string;
    status: string;
    pressure: number;
    temp(): string;
}
