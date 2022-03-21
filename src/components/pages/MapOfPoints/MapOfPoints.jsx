import React from 'react';
import s from './MapOfPoints.module.css'
import { YMaps, Map } from 'react-yandex-maps';

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
            <YMaps>
                <Map defaultState={{ center: [56.49, 84.90], zoom: 12 }} width='1000px' height='500px'/>
            </YMaps>
        </div>
    );
};

export default MapOfPoints;