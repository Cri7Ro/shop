import react from 'react';
import loaderStyles from './Loader.module.scss';

const Loader = () => {
    return (
        <div id={loaderStyles.floatingBarsG}>
            <div className={loaderStyles.blockG} id={loaderStyles.rotateG_01}></div>
            <div className={loaderStyles.blockG} id={loaderStyles.rotateG_02}></div>
            <div className={loaderStyles.blockG} id={loaderStyles.rotateG_03}></div>
            <div className={loaderStyles.blockG} id={loaderStyles.rotateG_04}></div>
            <div className={loaderStyles.blockG} id={loaderStyles.rotateG_05}></div>
            <div className={loaderStyles.blockG} id={loaderStyles.rotateG_06}></div>
            <div className={loaderStyles.blockG} id={loaderStyles.rotateG_07}></div>
            <div className={loaderStyles.blockG} id={loaderStyles.rotateG_08}></div>
        </div>
    );
};

export default Loader;