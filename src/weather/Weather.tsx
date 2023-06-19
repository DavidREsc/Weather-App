import '../_styles/weather.css'
import CityInput from './CityInput';
import CurrentWeather from './CurrentWeather';
import Previous5Days from './Previous5Days';
import OtherCities from './OtherCities';
import { FormEvent, useState } from "react";
import getApiKey from '../_utils/ApiKey';
import { Coordinates, Cities, CityData, ICity } from '../_utils/Types';

const Weather: React.FC = () => {
    const [coordinates, setCoordinates] = useState<Coordinates>()
    const [otherCities, setOtherCities] = useState<Cities>()
    const apiKey = getApiKey()

    // Convert city to geo coordinates
    const handleCity = async (e: FormEvent, city: string) => {
        e.preventDefault();
        try {
            const response = await fetch(
                `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=20&appid=${apiKey}`
            );
            const jsonData = await response.json() as CityData;
            const cities: Cities = []
            jsonData.forEach((city: ICity) => {
                cities.push(`${city.name}, ${city.state}, ${city.country}`)
            })
            setCoordinates([jsonData[0].lat, jsonData[0].lon])
            setOtherCities(cities)
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <main className='weather-container'>
            <div className='weather'>
                <section>
                    <CityInput handleSubmit={handleCity}/>
                </section>
                <section>
                    <h2>Current Weather</h2>
                    <CurrentWeather coordinates={coordinates}/>
                </section>
                <section>
                    <h2>Previous 5 Days</h2>
                    <Previous5Days coordinates={coordinates}/>
                </section>
            </div>
            <section>
                <h2>Other Cities</h2>
                <OtherCities cities={otherCities}/>
            </section>
        </main>
    )
}

export default Weather;
