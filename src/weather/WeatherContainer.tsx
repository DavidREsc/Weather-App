import '../_styles/weather.css'
import CityInput from './CityInput';
import CurrentWeather from './CurrentWeather';
import Previous5Days from './Previous5Days';
import CityResults from './CityResults';
import { FormEvent, useState } from "react";
import getApiKey from '../_utils/ApiKey';
import { Coordinates, CityData, ICity} from '../_utils/Types';

const Weather: React.FC = () => {
    const [coordinates, setCoordinates] = useState<Coordinates>()
    const [currentCity, setCurrentCity] = useState<ICity>()
    const [cityResults, setCityResults] = useState<CityData>()
    const apiKey = getApiKey()

    // Fetch geo coordinates
    const handleCity = async (e: FormEvent, city: string, cb: (msg: string) => void) => {
        e.preventDefault();
        try {
            const response = await fetch(
                `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=20&appid=${apiKey}`
            );
            const jsonData = await response.json() as CityData;
            if (!jsonData.length) {
                cb(`No results found for ${city}`)
                return
            }
            setCoordinates([jsonData[0].lat, jsonData[0].lon])
            setCurrentCity(jsonData[0])
            setCityResults(jsonData)
            cb("")
        } catch (e) {
            console.log(e);
            cb("Error fetching locations")
        }
    }

    const handleNewCity = (city: ICity) => {
        setCoordinates([city.lat, city.lon])
        setCurrentCity(city)
    }

    return (
        <main className='weather-container'>
            <div>
                <CityInput handleSubmit={handleCity}/>
                <CurrentWeather coordinates={coordinates} currentCity={currentCity}/>
                <Previous5Days coordinates={coordinates}/>
            </div>
            <CityResults cities={cityResults} handleNewCity={handleNewCity}/>
        </main>
    )
}

export default Weather;
