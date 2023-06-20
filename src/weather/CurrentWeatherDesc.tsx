import { ICurrentWeather } from "../_utils/Types";
import { capitalize } from "../_utils/Formatting";
import WeatherIcon from "../_utils/WeatherIcon";

interface CurrentWeatherDescProps {
    currentWeather: ICurrentWeather;
}

const CurrentWeatherDesc: React.FC<CurrentWeatherDescProps> = ({currentWeather}) => {
    return (
        <div className='current-weather-desc'>
            <h3>{capitalize(currentWeather.weather[0].description)}</h3>
            <span className='weather-icon-lg'><WeatherIcon status={currentWeather.weather[0]}/></span>
        </div>
    )
}

export default CurrentWeatherDesc;