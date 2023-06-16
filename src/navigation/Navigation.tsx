import {Outlet} from 'react-router-dom'
import NavBar from './NavBar';
import '../_styles/navigation.css'

const Navigation: React.FC = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}

export default Navigation;
