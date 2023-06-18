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
            case "cloudy":
                return Cloudy;
            case "partly_cloudy":
                return PartlyCloudy
            case "rain":
                return Rain
            case "snow":
                return Snow
            case "sun":
                return Sun
            case "thunder_storm":
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
