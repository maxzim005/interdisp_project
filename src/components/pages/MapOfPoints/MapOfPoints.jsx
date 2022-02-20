import React from 'react';
import s from './MapOfPoints.module.css'

const MapOfPoints = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.current_city}>Current city: Tomsk</div>
            <div className={s.switcher}>
                <label className={s.switch}>
                    <input type='checkbox'></input>
                        <span className={s.slider}></span>
                </label>
            </div>
            <div className={s.current_category}>Current category</div>
            <div className={s.chosen_point}>Point</div>
            <div className={s.comments}>Comments:</div>
            <div className={s.comments_section}>Comments section</div>
            <div className={s.map}>MAP</div>
        </div>
    );
};

export default MapOfPoints;