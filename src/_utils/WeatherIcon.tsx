import { IWeather } from './Types'
import Cloudy from '../assets/cloudy.svg'
import PartlyCloudy from '../assets/partlycloudy.svg'
import Rain from '../assets/rain.svg'
import Snow from '../assets/snow.svg'
import Sun from '../assets/sun.svg'
import ThunderStorm from '../assets/thunderstorm.svg'
import Mist from '../assets/mist.svg'

interface StatusProps {
    status: IWeather;
}

const Status: React.FC<StatusProps> = ({status}) => {
    
    const renderStatusIcon = () => {
        switch (status.main) {
            case "Clouds":
                if (status.description === 'overcast clouds') return Cloudy
                return PartlyCloudy;
            case "Atmosphere":
                return PartlyCloudy
            case "Rain":
                return Rain
            case "Snow":
                return Snow
            case "Clear":
                return Sun
            case "Thunderstorm":
                return ThunderStorm
            default:
                return Mist
        }
    }
    return (
        <img src={renderStatusIcon()} className='status-icon'/>
    )
}

export default Status;
