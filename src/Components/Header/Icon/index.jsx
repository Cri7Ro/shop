import react from 'react';

const Icon = ({imgSrc, text}) => {
    return (
        <div>
            <img src={imgSrc} alt="" />
            <p>{text}</p>
        </div>
    );
};

export default Icon;