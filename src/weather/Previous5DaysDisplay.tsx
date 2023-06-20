import { PreviousWeatherData } from "../_utils/Types"
import WeatherIcon from "../_utils/WeatherIcon"
import {ImEarth} from 'react-icons/im'
import {WiHumidity} from 'react-icons/wi'
import {BiWind} from 'react-icons/bi'

interface Previous5DaysDisplayProps {
    weatherData: PreviousWeatherData
}

const Previous5DaysDisplay: React.FC<Previous5DaysDisplayProps> = ({weatherData}) => {
    return (
    <table className='previous-5-days'>
        <tbody>
        {weatherData && weatherData!.map((w, idx) => {
            return (  
                <tr key={idx}>        
                    <td>{new Date(w.hourly[16].dt * 1000).toDateString()}</td>
                    <td><ul>
                        <li><ImEarth />{`Weather: ${w.hourly[16].weather[0].description}`}</li>
                        <li><BiWind />{`Wind: ${Math.round(w.hourly[16].wind_speed)} km/h`}</li>
                        <li><WiHumidity />{`Humidity: ${w.hourly[16].humidity}%`}</li>
                    </ul></td>
                    <td><div className='weather-icon-sm'><WeatherIcon status={w.hourly[16].weather[0]}/></div></td>
                    <td>{`${Math.round(w.hourly[16].temp)} \xB0C`}</td>
                </tr> 
            )
        })}
        </tbody>
    </table>
    )
}

export default Previous5DaysDisplay;
