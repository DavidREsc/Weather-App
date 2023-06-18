import {AiOutlineMenu} from 'react-icons/ai'

interface MenuBtnProps {
    handleActive: () => void;
}

const MenuBtn: React.FC<MenuBtnProps> = ({handleActive}) => {
    return (
        <button className='menu-btn active' onClick={handleActive}><AiOutlineMenu /></button>
    )
}

export default MenuBtn;
