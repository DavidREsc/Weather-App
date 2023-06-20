import { ICurrentWeather } from "../_utils/Types"
import { capitalize } from "../_utils/Formatting";
import Status from "../_utils/WeatherIcon";
import CurrentWeatherInfo from "./CurrentWeatherInfo";
import CurrentWeatherDesc from "./CurrentWeatherDesc";

interface CurrentWeatherDisplayProps {
    currentWeather: ICurrentWeather;
    state: string | undefined;
}

const CurrentWeatherDisplay: React.FC<CurrentWeatherDisplayProps> = ({currentWeather, state}) => {
    return (
        <div className='current-weather'>
           <CurrentWeatherInfo currentWeather={currentWeather} state={state}/>
           <CurrentWeatherDesc currentWeather={currentWeather}/>
        </div>
    )
}

export default CurrentWeatherDisplay;
