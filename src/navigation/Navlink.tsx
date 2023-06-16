import {NavLink} from 'react-router-dom'
import {ReactElement} from 'react'

interface NavlinkProps {
    path: string;
    name: string;
    renderIcon: () => ReactElement;
}

const Navlink: React.FC<NavlinkProps> = ({path, name, renderIcon}) => {
    return (
        <NavLink to={path} className='nav-link' title={name}>
            <span className='nav-icon'>{renderIcon()}</span>
            <span>{name}</span>
        </NavLink>
    )
}

export default Navlink;