import getApiKey from "../_utils/ApiKey";
import { Coordinates, IPreviousWeather, PreviousWeatherData } from "../_utils/Types";
import {useEffect, useCallback, useState} from 'react'
import Message from "../_utils/Message";
import Previous5DaysDisplay from "./Previous5DaysDisplay";
import Loading from "../_utils/Loading";

interface Previous5DaysProps {
    coordinates: Coordinates | undefined;
}

const Previous5Days: React.FC<Previous5DaysProps> = ({coordinates}) => {
    const [weatherData, setWeatherData] = useState<PreviousWeatherData>()
    const [loading, setLoading] = useState<boolean>(true)
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
            setWeatherData(jsonData)
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }, [coordinates])

    useEffect(() => {
        if (!coordinates) return
        setLoading(true)
        const timestamps: number[] = []
        // Get unix timestamps of previous 5 days
        for (let i = 1; i <= 5; i++) {
            let ts = Math.floor((Date.now() / 1000) - (i * 24 * 60 * 60))
            timestamps.push(ts);
        }
        fetchPreviousWeather(timestamps)
    }, [coordinates])

    return (
        !coordinates ? <Message message='No data to display'/> :
        loading ? <Loading /> :
        <section>
            <h2>Previous 5 Days</h2>
            <Previous5DaysDisplay weatherData={weatherData!}/>
        </section>
    )
}

export default Previous5Days;
