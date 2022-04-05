import React, { useState } from 'react';
import { NavLink, Redirect, useNavigate } from 'react-router-dom';
import s from './MapOfPoints.module.css'
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import Switch from '@mui/material/Switch';


const MapOfPoints = () => {
    const navigate = useNavigate();

    const [checked, setChecked] = useState(true);

    const handleChange = (e) => {
        setChecked(e.target.checked);
        navigate('/list_of_points');
    };
    const handleClick = () => {
        navigate('/point');
    }
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
                <Map defaultState={{ center: [56.474192, 84.970737], zoom: 13 }} width='1000px' height='500px'>
                    <Placemark onClick={handleClick} defaultGeometry={[56.493092, 84.968592]} options ={{iconColor: 'red'}}/>
                    <Placemark onClick={handleClick} defaultGeometry={[56.471246, 84.968935]} options ={{iconColor: 'purple'}}/>
                    <Placemark onClick={handleClick} defaultGeometry={[56.463576, 84.950377]} options ={{iconColor: 'green'}}/>
                    <Placemark onClick={handleClick} defaultGeometry={[56.462745, 84.977771]} options ={{iconColor: 'yellow'}}/>
                    <Placemark onClick={handleClick} defaultGeometry={[56.477510, 84.989359]} options ={{iconColor: 'pink'}}/>
                </Map>
            </YMaps>
        </div>
    );
};

export default MapOfPoints;