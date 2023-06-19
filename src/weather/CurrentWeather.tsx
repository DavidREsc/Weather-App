import getApiKey from "../_utils/ApiKey";
import { Coordinates, ICurrentWeather } from "../_utils/Types";
import {useEffect, useCallback} from 'react'

interface CurrentWeatherProps {
    coordinates: Coordinates | undefined
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({coordinates}) => {
    const apiKey = getApiKey();
    const fetchCurrentWeather = useCallback(async () => {
        if (!coordinates) return;
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates[0]}&lon=${coordinates[1]}&appid=${apiKey}&units=metric`
            );
            const jsonData = await response.json() as ICurrentWeather
            console.log(jsonData)
        } catch (e) {
            console.log(e)
        }
    }, [coordinates])

    useEffect(() => {
        fetchCurrentWeather()
    }, [coordinates])

    return (
        <div className='current-weather'></div>
    )
}

export default CurrentWeather;
