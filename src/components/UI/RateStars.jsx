import React from 'react';
import s from './RateStars.module.css'

const RateStars = () => {
    return (
    <div className={s.rating_result}>
        <span className={s.active}></span>	
        <span className={s.active}></span>    
        <span className={s.active}></span>  
        <span></span>    
        <span></span>
    </div>
    );
};

export default RateStars;