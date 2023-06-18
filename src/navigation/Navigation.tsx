import {Outlet} from 'react-router-dom'
import NavBar from './NavBar';
import '../_styles/navigation.css'
import MenuBtn from './MenuBtn';
import { useState } from 'react';

const Navigation: React.FC = () => {
    const [active, setActive] = useState<boolean>(false);
    const handleActive = () => setActive(prev => !prev);
    return (
        <>
            <MenuBtn handleActive={handleActive}/>
            <NavBar active={active}/>
            <Outlet />
        </>
    )
}

export default Navigation;
