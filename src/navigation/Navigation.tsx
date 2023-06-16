import {NavLink, Outlet} from 'react-router-dom'


const Navigation: React.FC = () => {
    return (
        <>
            <NavLink to='weather'>Weather</NavLink>
            <Outlet />
        </>
    )
}

export default Navigation;
