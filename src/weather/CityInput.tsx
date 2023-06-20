import { FormEvent, useState } from "react";

interface CityInputProps {
    handleSubmit: (e: FormEvent, city: string, cb: (error: string) => void) => void;
}

const CityInput: React.FC<CityInputProps> = ({handleSubmit}) => {
    const [city, setCity] = useState<string>("");
    const [error, setError] = useState<string>("");
    return (
        <section>
        <form className='city-form' onSubmit={(e) => handleSubmit(e, city, (e) => setError(e))}>
            <div>
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
                <p className='error-msg'>{error}</p>
            </div>
            <input type='submit' className='city-submit' value='Search'/>
        </form>
        </section>
    )
}

export default CityInput;
