import React, { useEffect, useState } from 'react';
import s from './ListOfPoints.module.css'
import PointElement from './PointElement';
import Switch from '@mui/material/Switch';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ListOfPoints = ({getPointId}) => {

    const navigate = useNavigate();
    const [checked, setChecked] = useState(false);
    const [points, setPoints] = useState([]);

    useEffect(() => {
        fetchAllPoints()
    }, [])

    async function fetchAllPoints() {
        try {
            const response = await axios.get("https://wasite.herokuapp.com/api/points/", {
                headers: {
                    Authorization: `Token ${localStorage.getItem('authToken')}`
                }
            });
            setPoints(response.data);
        } catch (error) {
            if (error.response) {
                console.log(error.response)
            }
        }
    }

    const handleChange = (e) => {
        setChecked(e.target.checked);
        navigate('/map_of_points');
    };

    // const mass = ['ZEN', 'MISHKI', 'TEST1', 'TEST2', 'ZEN', 'MISHKI', 'TEST1', 'TEST2', 'ZEN', 'MISHKI', 'TEST1', 'TEST2', 'ZEN', 'MISHKI', 'TEST1', 'TEST2',]

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.current_city}>Current city: Tomsk</div>
                <Switch
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                />

                <div className={s.current_category}>Current category</div>
                <div className={s.sort_by}>sort by: </div>
                <div>LIST OF POINTS</div>
                <div className={s.content_wrapper}>
                    {
                        points.map(point => <PointElement getPointId={getPointId} point={point} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default ListOfPoints;