import react from 'react';
import iconStyles from './Icon.module.scss'; 

const Icon = ({imgSrc, text}) => {
    return (
        <div className={iconStyles.icon}>
            <img src={imgSrc} alt="" height='14px'/>
            <p>{text}</p>
        </div>
    );
};

export default Icon;