import React, { useState } from 'react';
import { NavLink, Redirect, useNavigate } from 'react-router-dom';
import s from './MapOfPoints.module.css'
import { YMaps, Map } from 'react-yandex-maps';
import Switch from '@mui/material/Switch';


const MapOfPoints = () => {
    const navigate = useNavigate();

    const [checked, setChecked] = useState(true);

    const handleChange = (e) => {
        setChecked(e.target.checked);
        navigate('/list_of_points');
    };
    
    return (
        <div className={s.wrapper}>
            <div className={s.current_city}>Current city: Tomsk</div>
            <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
                color="warning"
            />
            <div className={s.current_category}>Current category</div>
            <div className={s.chosen_point}>Point</div>
            <div className={s.comments}>Comments:</div>
            <div className={s.comments_section}>Comments section</div>
            <div className={s.map}>MAP</div>
            <YMaps>
                <Map defaultState={{ center: [56.49, 84.90], zoom: 12 }} width='1000px' height='500px' />
            </YMaps>
        </div>
    );
};

export default MapOfPoints;