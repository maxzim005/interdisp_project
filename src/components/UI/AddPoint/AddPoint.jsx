import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import s from './AddPoint.module.css';
import axios from 'axios';
import InteractiveMap from './InteractiveMap';

const AddPoint = () => {
    const navigate = useNavigate();
    const [name, setName] = useState();
    const [descr, setDescr] = useState();
    const [city, setCity] = useState('Tomsk');
    const [userId, setUserId] = useState();
    const [pointCoords, setPointCoords] = useState(['Click on the map!']);

    const getPointCoords = (coords) => {
		setPointCoords(coords);
	}

    useEffect(() => {
        fetchInfo()
    }, [])

    async function fetchInfo() {
        try {
            const response = await axios.get("https://wasite.herokuapp.com/api/auth/users/me/", {
                headers: {
                    Authorization: `Token ${localStorage.getItem('authToken')}`
                }
            });
            setUserId(response.data.userId);
        } catch (error) {
            if (error.response) {
                console.log(error.response)
            }
        }
    }

    async function makePoint() {
        const D_now = new Date();
        D_now.toISOString();
        const D_then = new Date();
        D_then.setDate(D_then.getDate() + 1);
        D_then.toISOString();
        try {
            const response = await axios.post("https://wasite.herokuapp.com/api/points/", {
                name: name,
                description: descr,
                city: city,
                userId: userId,
                eventTime: D_now,
                timeDuration: D_then,
                latitude: pointCoords[0],
                longitude: pointCoords[1],
            },
            {headers: {
                    Authorization: `Token ${localStorage.getItem('authToken')}`
                },}
            );
        } catch (error) {
            if (error.response) {
                console.log(error.response)
            }
        }
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const date_start = new Date();
        const date_end = date_start + 86400000;
        const token = await makePoint({
            name,
            descr,
            city,
            userId,
            date_start,
            date_end
        });
        navigate('/map_of_points')
    }

    return (
        <div className={s.wrapper}>
            <div className={s.text}>Add point</div>
            <div className={s.login_wrapper}>
                <form onSubmit={handleSubmit} className={s.form_style}>
                    <label>
                        <p>Point name</p>
                        <input type="name" onChange={e => setName(e.target.value)} />
                    </label>
                    <label>
                        <p>Description</p>
                        <input type="description" onChange={e => setDescr(e.target.value)} />
                    </label>
                    <label>
                        <p>Latitude and longitude</p>
                    </label>
                    <label>
                    {pointCoords}
                    </label>
                    <InteractiveMap getPointCoords={getPointCoords}></InteractiveMap>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPoint;