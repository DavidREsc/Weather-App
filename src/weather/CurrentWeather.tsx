import getApiKey from "../_utils/ApiKey";
import { Coordinates, ICity, ICurrentWeather } from "../_utils/Types";
import {useEffect, useCallback, useState} from 'react'
import CurrentWeatherDisplay from "./CurrentWeatherDisplay";
import Loading from "../_utils/Loading";
import Message from "../_utils/Message";
import Error from "../_utils/Error";

interface CurrentWeatherProps {
    coordinates: Coordinates | undefined
    currentCity: ICity | undefined;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({coordinates, currentCity}) => {
    const [currentWeather, setCurrentWeather] = useState<ICurrentWeather>()
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [errorHandler, setErrorHandler] = useState<boolean>(false)
    const [state, setState] = useState<string>()
    const apiKey = getApiKey();


    const fetchCurrentWeather = useCallback(async () => {
        try {
            await new Promise(resolve => setTimeout(resolve, 500));
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates![0]}&lon=${coordinates![1]}&appid=${apiKey}&units=metric`
            );
            const jsonData = await response.json() as ICurrentWeather
            if (jsonData.cod !== 200) throw new TypeError()
            setCurrentWeather(jsonData)
            setState(currentCity?.state)
        } catch (e) {
            console.log(e)
            setError(true)
        } finally {
            setLoading(false)
        }
    }, [coordinates])

    useEffect(() => {
        if (!coordinates) return;
        setLoading(true)
        setError(false)
        fetchCurrentWeather()
    }, [coordinates, errorHandler])

    const retry = () => setErrorHandler(p => !p)

    return (
        !coordinates ? <Message message='Search for a city to get the current weather'/> :
        loading ? <Loading /> : 
        error ? <Error error='Error fetching current weather data' func={retry} /> :
        <section>
            <h2>Current Weather</h2>
            <CurrentWeatherDisplay currentWeather={currentWeather!} state={state}/>
        </section>
    )
}

export default CurrentWeather;
