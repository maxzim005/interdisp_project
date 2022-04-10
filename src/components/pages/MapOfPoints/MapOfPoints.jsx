import React, { useEffect, useState } from 'react';
import { NavLink, Redirect, useNavigate } from 'react-router-dom';
import s from './MapOfPoints.module.css'
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import Switch from '@mui/material/Switch';
import axios from 'axios';
import PlacemarkView from './PlacemarkView';


const MapOfPoints = ({getPointId, currentCategory}) => {
    const navigate = useNavigate();
    const [checked, setChecked] = useState(true);
    const [points, setPoints] = useState([]);

    useEffect(() => {
        fetchAllPoints()
    }, [])

    async function fetchAllPoints() {
        try {
            const response = await axios.get("https://wasite.herokuapp.com/api/points/", {
                headers: {
                    Authorization: `Token ${localStorage.getItem('authToken')}`
                },
                params: {
                    tagName: currentCategory.tagName,
                },
            });
            console.log(response);
            console.log(response.data);
            setPoints(response.data);
            console.log(points);
        } catch (error) {
            if (error.response) {
                console.log(error.response)
            }
        }
    }

    const handleChange = (e) => {
        setChecked(e.target.checked);
        navigate('/list_of_points');
    };
    
    const handleClick = (e) => {
        navigate('/add_point');
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
            <button className={s.btn} onClick={handleClick}>Add your point!</button>
            <div className={s.current_category}>Current category</div>
            <div className={s.chosen_point}>Point</div>
            <div className={s.comments}>Comments:</div>
            <div className={s.comments_section}>Comments section</div>
            <div className={s.map}>MAP</div>
            <YMaps>
                <Map defaultState={{ center: [56.474192, 84.970737], zoom: 13 }} width='1000px' height='500px'>
                    {points.map(point =>
                    <PlacemarkView getPointId={getPointId} point={point}/>)}
                    {/* <Placemark key={point.pointId} onClick={handleClick} defaultGeometry={[point.latitude, point.longitude]} options ={{iconColor: 'red'}}/>)} */}
                </Map>
            </YMaps>
        </div>
    );
};

export default MapOfPoints;