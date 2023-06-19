import Cloudy from '../assets/cloudy.svg'
import PartlyCloudy from '../assets/partlycloudy.svg'
import Rain from '../assets/rain.svg'
import Snow from '../assets/snow.svg'
import Sun from '../assets/sun.svg'
import ThunderStorm from '../assets/thunderstorm.svg'

interface StatusProps {
    status: string;
}

const Status: React.FC<StatusProps> = ({status}) => {
    
    const renderStatusIcon = () => {
        switch (status) {
            case "Clouds":
                return Cloudy;
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
                return undefined;
        }
    }
    return (
        <img src={renderStatusIcon()} className='status-icon'/>
    )
}

export default Status;
