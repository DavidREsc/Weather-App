import { FormEvent, useState } from "react";

interface CityInputProps {
    handleSubmit: (e: FormEvent, city: string) => void;
}

const CityInput: React.FC<CityInputProps> = ({handleSubmit}) => {
    const [city, setCity] = useState<string>("");
    return (
        <section>
        <form className='city-form' onSubmit={(e) => handleSubmit(e, city)}>
            <input 
                type='text' 
                placeholder='Toronto, CA' 
                className='city-input'
                spellCheck={false} 
                autoComplete="off"
                onChange={(e) => setCity(e.target.value)}
                value={city}
                required>
            </input>
            <input type='submit' className='city-submit' value='Search'/>
        </form>
        </section>
    )
}

export default CityInput;
