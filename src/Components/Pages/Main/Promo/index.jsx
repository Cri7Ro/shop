import react, { useEffect, useRef, useState } from 'react';
import promoData from '../../../../Data/promoData';
import promoStyles from './Promo.module.scss';


const Promo = () => {

    const [currentPromo, setCurrentPromo] = useState(0);
    const [lineArray, setLineArray] = useState([]);
    const line1Ref = useRef(null);
    const line2Ref = useRef(null);
    const line3Ref = useRef(null);
    const line4Ref = useRef(null);

    useEffect(() => {
        if (line1Ref) line1Ref.current.classList.add(promoStyles.active);
    }, [line1Ref]);

    useEffect(() => {
        if (line1Ref && line2Ref && line3Ref && line4Ref) setLineArray([...lineArray, line1Ref, line2Ref, line3Ref, line4Ref]);
    }, [line1Ref, line2Ref,line3Ref, line4Ref]);

    useEffect (() => {
        if (lineArray[currentPromo]) {
            lineArray[currentPromo].current.classList.add(promoStyles.active);
        }
    }, [currentPromo]);

    function handleLeftClick() {
        lineArray[currentPromo].current.classList.remove(promoStyles.active);
        if (promoData[currentPromo- 1]) {
            setCurrentPromo(prev => prev - 1);
        } else {
            setCurrentPromo(promoData.length - 1);
        }
    }

    function handleRightClick() {
        lineArray[currentPromo].current.classList.remove(promoStyles.active);
        if (promoData[currentPromo + 1]) {
            setCurrentPromo(prev => prev + 1);
        } else {
            setCurrentPromo(0);
        }
    }

    return (
        <section className={promoStyles.promo_container}>
            <div className={promoStyles.promo}>
                <div className={promoStyles.promoText_container}>
                    <button id="left" onClick={handleLeftClick}><img src="./image/main_page/left.png" alt="" /></button>
                    <div className={promoStyles.promoText}>
                        <h1>{promoData[currentPromo].promo}</h1>
                    </div>
                </div>
                <button id="right" onClick={handleRightClick}><img src="./image/main_page/right.png" alt="" /></button>
            </div>
            <div className={promoStyles.promo_line_container}>
                <div ref={line1Ref}></div>
                <div ref={line2Ref}></div>
                <div ref={line3Ref}></div>
                <div ref={line4Ref}></div>
            </div>
        </section>
    );
};

export default Promo;