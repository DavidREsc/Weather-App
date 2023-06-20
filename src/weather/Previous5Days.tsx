import getApiKey from "../_utils/ApiKey";
import { Coordinates, IPreviousWeather, PreviousWeatherData } from "../_utils/Types";
import {useEffect, useCallback, useState} from 'react'
import Message from "../_utils/Message";
import Previous5DaysDisplay from "./Previous5DaysDisplay";
import Loading from "../_utils/Loading";
import Error from "../_utils/Error";

interface Previous5DaysProps {
    coordinates: Coordinates | undefined;
}

const Previous5Days: React.FC<Previous5DaysProps> = ({coordinates}) => {
    const [weatherData, setWeatherData] = useState<PreviousWeatherData>()
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [errorHandler, setErrorHandler] = useState<boolean>(false)
    const apiKey = getApiKey()

    // Fetch weather for previous 5 days
    const fetchPreviousWeather = useCallback(async (timestamps: number[]) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 500));
            const promises: Promise<Response>[] = [];
            timestamps.forEach(ts => {
                promises.push(fetch(
                    `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${coordinates![0]}&lon=${coordinates![1]}&dt=${ts}&appid=${apiKey}&units=metric`
                ))
            })
            const responses = await Promise.all(promises)
            const jsonData: PreviousWeatherData = await Promise.all(responses.map(res => res.json()))
            jsonData.forEach(d => {
                if (d.cod && d.cod !== 200) throw new TypeError()
            })
            setWeatherData(jsonData)
        } catch (e) {
            console.log(e)
            setError(true)
        } finally {
            setLoading(false)
        }
    }, [coordinates])

    useEffect(() => {
        if (!coordinates) return
        setLoading(true)
        setError(false)
        const timestamps: number[] = []
        // Get unix timestamps of previous 5 days
        for (let i = 1; i <= 5; i++) {
            let ts = Math.floor((Date.now() / 1000) - (i * 24 * 60 * 60))
            timestamps.push(ts);
        }
        fetchPreviousWeather(timestamps)
    }, [coordinates, errorHandler])

    const retry = () => setErrorHandler(p => !p)

    return (
        !coordinates ? <Message message='No data to display'/> :
        loading ? <Loading /> :
        error ? <Error error='Error fetching data' func={retry} /> :
        <section>
            <h2>Previous 5 Days</h2>
            <Previous5DaysDisplay weatherData={weatherData!}/>
        </section>
    )
}

export default Previous5Days;
