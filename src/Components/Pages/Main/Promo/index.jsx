import react from 'react';
import promoStyles from './Promo.module.scss';


const Promo = () => {
    return (
        <section className={promoStyles.promo_container}>
            <div className={promoStyles.promo}>
                <div className={promoStyles.promoText_container}>
                    <button id="left"><img src="./image/main_page/left.png" alt="" /></button>
                    <div className={promoStyles.promoText}>
                        <h2>Акция лета 2021 – на все чехлы iphone</h2>
                        <h1>1+1=3</h1>
                    </div>
                </div>
                <button id="right"><img src="./image/main_page/right.png" alt="" /></button>
            </div>
            <div className={promoStyles.promo_line_container}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
    );
};

export default Promo;