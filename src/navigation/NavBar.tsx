import Navlink from "./Navlink";
import {ImEarth} from 'react-icons/im'
import {TfiLayoutPlaceholder} from 'react-icons/tfi'

interface NavBarProps {
    active: boolean;
}

const NavBar: React.FC<NavBarProps> = ({active}) => {
    return (
        <aside className={active ? 'active' : ''}>
            <h1>Weather App</h1>
            <nav>
                <Navlink path='weather' name='Weather' renderIcon={ImEarth}/>
                <Navlink path='nav2' name='Nav 2' renderIcon={TfiLayoutPlaceholder}/>
                <Navlink path='nav3' name='Nav 3' renderIcon={TfiLayoutPlaceholder}/>
                <Navlink path='nav4' name='Nav 4' renderIcon={TfiLayoutPlaceholder}/>
            </nav>
        </aside>
    )
}

export default NavBar;
