import react from 'react';
import menuStyles from './Menu.module.scss';

const Menu = () => {
    return (
        <nav className={menuStyles.menu_container}>
            <ul className={menuStyles.menu}>
                <li><a href="">Магазины</a></li>
                <li><a href="">Доставка</a></li>
                <li><a href="">Контакты</a></li>
            </ul>
        </nav>  
    );
};

export default Menu;