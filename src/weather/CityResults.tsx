import { CityData, ICity } from "../_utils/Types";

interface CityResultsProps {
    cities: CityData | undefined
    handleNewCity: (city: ICity) => void;
}

const CityResults: React.FC<CityResultsProps> = ({cities, handleNewCity}) => {
    return (
        cities &&
        <section className='city-results'>
            <h2>City Results</h2>
            <ul className='other-cities'>
                {cities?.map((city, idx) => {
                    return (
                        <li key={idx}>
                            <button onClick={() => handleNewCity(city)}>
                                {`${city.name}, ${city.state ? city.state + ',' : ''} ${city.country}`}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default CityResults;
