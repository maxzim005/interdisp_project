import React, { useState } from 'react';
import s from './ListOfPoints.module.css'
import PointElement from './PointElement';
import Switch from '@mui/material/Switch';
import { useNavigate } from 'react-router-dom';

const ListOfPoints = () => {

    const navigate = useNavigate();

    const [checked, setChecked] = useState(false);

    const handleChange = (e) => {
        setChecked(e.target.checked);
        navigate('/map_of_points');
    };

    const mass = ['ZEN', 'MISHKI', 'TEST1', 'TEST2', 'ZEN', 'MISHKI', 'TEST1', 'TEST2', 'ZEN', 'MISHKI', 'TEST1', 'TEST2', 'ZEN', 'MISHKI', 'TEST1', 'TEST2',]

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
                        mass.map(point => <PointElement point={point} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default ListOfPoints;