import react from 'react';
import Menu from './Menu';
import Icon from './Icon';
import headerStyles from './Header.module.scss'; 

const Header = () => {
    return (
        <header className={headerStyles.header_container}>
            <section className={headerStyles.header_nav}>
               <Menu />
                <p>+7 (921) 912-34-56</p>   
            </section>
            <section>
                <img src="./image/header/logo.png" alt="" />
                <div>
                    <input type="text" placeholder="Поиск по каталогу"/>
                    <button><img src="./image/header/search.png" alt="" /></button>
                </div>
                <div>
                    <Icon imgSrc={'./image/header/stats.png'} text='Сравнение'/>
                    <Icon imgSrc={'./image/header/like.png'} text='Избранное'/>
                    <Icon imgSrc={'./image/header/user.png'} text='Войти'/>
                </div>
                <div>
                    <img src="./image/header/basket.png" alt="" />
                    <p>6 500 P</p>
                </div>
            </section>
        </header>
    );
};

export default Header;