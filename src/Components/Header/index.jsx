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
            <section className={headerStyles.header_main_content}>
                <img src="./image/header/logo.png" alt="" height='48px'/>
                <div className={headerStyles.search}>
                    <input type="text" placeholder="Поиск по каталогу" className={headerStyles.search_input}/>
                    <button><img src="./image/header/search.png" alt="" /></button>
                </div>
                <div className={headerStyles.user_info}>
                    <div className={headerStyles.icon_container}>
                        <Icon imgSrc={'./image/header/stats.png'} text='Сравнение'/>
                        <Icon imgSrc={'./image/header/like.png'} text='Избранное'/>
                        <Icon imgSrc={'./image/header/user.png'} text='Войти'/>
                    </div>
                    <div className={headerStyles.basket}>
                        <img src="./image/header/basket.png" alt="" />
                        <p>6 500 P</p>
                    </div>
                </div>
            </section>
        </header>
    );
};

export default Header;