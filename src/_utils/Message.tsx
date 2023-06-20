import '../_styles/app.css'

interface MessageProps {
    message: string;
}

const Message: React.FC<MessageProps> = ({message}) => {
    return (
        <div className='message'><p>{message}</p></div>
    )
}

export default Message;
