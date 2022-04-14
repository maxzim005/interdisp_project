import React, { useEffect, useState } from 'react';
import s from './ListOfPoints.module.css'
import PointElement from './PointElement';
import Switch from '@mui/material/Switch';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField } from '@mui/material';

const ListOfPoints = ({ getPointId, currentCategory }) => {

    const navigate = useNavigate();
    const [checked, setChecked] = useState(false);
    const [points, setPoints] = useState([]);
    const [value, setValue] = useState('');

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
            setPoints(response.data);
            console.log(currentCategory);
        } catch (error) {
            if (error.response) {
                console.log(error.response)
            }
        }
    }

    async function fetchSearch() {
        try {
            const response = await axios.get("https://wasite.herokuapp.com/api/points/search_points/", {
                headers: {
                    Authorization: `Token ${localStorage.getItem('authToken')}`
                },
                params: {
                    q: value,
                },
            });
            setPoints(response.data);
            console.log(response.data);
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

    const handleClick = (e) => {
        navigate('/add_point');
    };

    const handleSearch = async e => {
        // e.preventDefault();
        const token = await fetchSearch({
            value,
        });
    }

    // const mass = ['ZEN', 'MISHKI', 'TEST1', 'TEST2', 'ZEN', 'MISHKI', 'TEST1', 'TEST2', 'ZEN', 'MISHKI', 'TEST1', 'TEST2', 'ZEN', 'MISHKI', 'TEST1', 'TEST2',]

    return (
        <div className={s.wrapper}>
            <div className={s.container}>

                <TextField id="outlined-basic" value={value} label="Search" variant="standard" onChange={e =>
                    setValue(e.target.value)} />
                <button onClick={handleSearch} >Search</button>

                <div className={s.current_city}>Current city: Tomsk</div>
                <Switch
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
                <button className={s.btn} onClick={handleClick}>Add your point!</button>
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