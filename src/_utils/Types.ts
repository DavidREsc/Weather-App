export type Coordinates = [number, number]
export type Cities = ICity[]
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
        feels_like: number;
    },
    name: string;
    weather: IWeather[],
    dt: number;
    wind: {
        speed: number;
        gust: number;
    }
    sys: {
        country: string;
        sunset: number;
        sunrise: number;
    }
}
export interface IWeather {
    description: string;
    main: string;
}
export interface IHourlyWeather {
    temp: number;
    wind_speed: number;
    weather: IWeather[];
    dt: number;
    humidity: number;
}
export interface IPreviousWeather {
    hourly: IHourlyWeather[];
}
export type PreviousWeatherData = IPreviousWeather[]
