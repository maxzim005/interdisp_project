import React, { useState, useEffect } from 'react';
import s from './Profile.module.css'
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import PointElement from '../ListOfPoints/PointElement';

const Profile = ({ getPointId }) => {
    const [username, setUsername] = useState();
    const [rating, setRating] = useState(0);
    const [userCity, setUserCity] = useState();
    const [value, setValue] = useState(2);
    const [userId, setUserId] = useState();
    const [activePoints, setActivePoints] = useState([]);
    const [inactivePoints, setInactivePoints] = useState([]);

    useEffect(() => {
        fetchInfo()
    }, [])

    useEffect(() => {
        getInfo()
    }, [userId])

    useEffect(() => {
        getActivePoints()
        getInactivePoints()
    }, [userId])


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

    async function getInfo() {
        try {
            const response = await axios.get(`https://wasite.herokuapp.com/api/users/${userId}/`, {
                headers: {
                    Authorization: `Token ${localStorage.getItem('authToken')}`
                }
            });
            setUsername(response.data.login);
            setRating(response.data.rating);
            setUserCity(response.data.userCity);

        } catch (error) {
            if (error.response) {
                console.log(error.response)
            }
        }
    }

    async function getActivePoints() {
        try {
            const response = await axios.get(`https://wasite.herokuapp.com/api/points/users_points_a/?userID=${userId}`, {
                headers: {
                    Authorization: `Token ${localStorage.getItem('authToken')}`
                }
            });
            setActivePoints(response.data);
            console.log(response.data);
        } catch (error) {
            if (error.response) {
                console.log(error.response)
            }
        }
    }

    async function getInactivePoints() {
        try {
            const response = await axios.get(`https://wasite.herokuapp.com/api/points/users_points_nact/?userID=${userId}`, {
                headers: {
                    Authorization: `Token ${localStorage.getItem('authToken')}`
                }
            });
            setInactivePoints(response.data);
            console.log(response.data);
        } catch (error) {
            if (error.response) {
                console.log(error.response)
            }
        }
    }

    const handleClick = (e) => {
        try {
            const response = axios.post("https://wasite.herokuapp.com/api/points/", {
            },
                {
                    headers: {
                        Authorization: `Token ${localStorage.getItem('authToken')}`
                    },
                }
            );
            localStorage.clear();
        } catch (error) {
            if (error.response) {
                console.log(error.response)
            }
        }
    };

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.username}>Hi, {username}!</div>
            </div>
            <div>Current city: {userCity}</div>
            <Typography component="legend">Current rating</Typography>
            <Rating
                name="simple-controlled"
                value={rating}
                onChange={(e, newValue) => {
                    setValue(newValue);
                }}
            />
            <div className={s.text}>Active points</div>
            <div className={s.content_wrapper}>
                {
                    activePoints.map(point => <PointElement getPointId={getPointId} point={point} />)
                }
            </div>
            
            <div className={s.text}>Inactive points</div>
            <div className={s.content_wrapper}>
            {
                inactivePoints.map(point => <PointElement getPointId={getPointId} point={point} />)
            }
            </div>
            <button className={s.btn} onClick={handleClick}>Log out</button>
        </div>
    );
};

export default Profile;