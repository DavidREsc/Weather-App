import '../_styles/weather.css'
import CityInput from './CityInput';
import CurrentWeather from './CurrentWeather';
import Previous5Days from './Previous5Days';
import Status from './Status';
import Sun from '../assets/sun.svg'

const Weather: React.FC = () => {
    // Convert city to geo coordinates
    const handleCity = () => {}

    // 
    return (
        <div className='weather-container'>
            <CityInput />
            <h2>Current Weather</h2>
            <CurrentWeather />
            <h2>Previous 5 Days</h2>
            <Previous5Days />
            <Status status="thunder_storm" />

        </div>
    )
}

export default Weather;
