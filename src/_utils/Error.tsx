import '../_styles/app.css'

interface ErrorProps {
    error: string;
    func: () => void;
}

const Error: React.FC<ErrorProps> = ({error, func}) => {
    return (
        <div className='error'>
            <p>{error}</p>
            <button onClick={func}>Retry</button>
        </div>
    )
}

export default Error;
