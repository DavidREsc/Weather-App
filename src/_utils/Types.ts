export type Coordinates = [number, number]
export type Cities = string[]
export interface ICity {
    country: string;
    lat: number;
    lon: number;
    name: string;
    state: string;
}
export type CityData = ICity[]
export interface ICurrentWeather {
    main: {
        humidity: number;
        temp: number;
    },
    name: string;
    weather: IWeather[],
    wind: {
        speed: number;
    }
}
export interface IWeather {
    description: string;
    main: string;
}
export interface IPreviousWeather {
    current: {
        temp: number;
        wind_speed: number;
        weather: IWeather[]
    }
}
export type PreviousWeatherData = IPreviousWeather[]
