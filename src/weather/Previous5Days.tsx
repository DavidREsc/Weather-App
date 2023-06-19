import getApiKey from "../_utils/ApiKey";
import { Coordinates, IPreviousWeather, PreviousWeatherData } from "../_utils/Types";
import {useEffect, useCallback} from 'react'

interface Previous5DaysProps {
    coordinates: Coordinates | undefined;
}

const Previous5Days: React.FC<Previous5DaysProps> = ({coordinates}) => {
    const apiKey = getApiKey()
    // Fetch weather from previous 5 days
    const fetchPreviousWeather = useCallback(async (dates: number[]) => {
        try {
            const promises: Promise<Response>[] = [];
            const jsonData: PreviousWeatherData = [];
            dates.forEach(date => {
                promises.push(fetch(
                    `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${coordinates![0]}&lon=${coordinates![1]}&dt=${date}&appid=${apiKey}&only_current&units=metric`
                ))
            })
            const responses = await Promise.all(promises)
            responses.forEach(async res => jsonData.push(await res.json() as IPreviousWeather))
            console.log(jsonData)
        } catch (e) {
            console.log(e)
        }
    }, [coordinates])

    useEffect(() => {
        if (!coordinates) return
        const dates: number[] = []
        for (let i = 1; i <= 5; i++) {
            let date = Math.floor((Date.now() / 1000) - (i * 24 * 60 * 60))
            dates.push(date);
        }
        fetchPreviousWeather(dates)
    }, [coordinates])

    return (
        <div className='previous-5-days'></div>
    )
}

export default Previous5Days;
