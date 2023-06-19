import { Cities } from "../_utils/Types";

interface OtherCitiesProps {
    cities: Cities | undefined
}

const OtherCities: React.FC<OtherCitiesProps> = ({cities}) => {
    console.log(cities)
    return (
        <div className='other-cities'></div>
    )
}

export default OtherCities;
