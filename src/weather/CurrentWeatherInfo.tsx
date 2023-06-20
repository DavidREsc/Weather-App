import { ICurrentWeather } from "../_utils/Types";
import {WiHumidity} from 'react-icons/wi'
import {BiWind} from 'react-icons/bi'
import {BsSunrise, BsSunset} from 'react-icons/bs'

interface CurrentWeatherInfoProps {
    currentWeather: ICurrentWeather;
    state: string | undefined;
}

const CurrentWeatherInfo: React.FC<CurrentWeatherInfoProps> = ({currentWeather, state}) => {
    return (
        <div className='current-weather-info'>
            <div>
                <h3>{`${currentWeather.name}, ${state ? state + ',' : ''} ${currentWeather.sys.country}`}</h3>
                <p className='current-date'>{new Date(currentWeather.dt * 1000).toLocaleDateString()}</p>
                <ul>
                    <li><WiHumidity /><p>{`Humidity: ${currentWeather.main.humidity}%`}</p></li>
                    <li><BiWind /><p>{`Wind: ${Math.round(currentWeather.wind.speed)} km/h`}</p></li>
                    <li><BsSunrise /><p>{`Sunrise: ${new Date(currentWeather.sys.sunrise * 1000).toLocaleTimeString()}`}</p></li>
                    <li><BsSunset /><p>{`Sunset: ${new Date(currentWeather.sys.sunset * 1000).toLocaleTimeString()}`}</p></li>
                </ul>
            </div>
            <div>
                <h2>{`${Math.round(currentWeather.main.temp)} \xB0C`}</h2>
                <p>{`Feels like ${Math.round(currentWeather.main.feels_like)} \xB0C`}</p>
            </div>
        </div>
    )
}

export default CurrentWeatherInfo;
