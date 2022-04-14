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
                <h4>{username}</h4>
                <img className={s.user_icon} src="https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg" alt="" />
            </div>
            
            <div className={s.current_city}>
                <h5>Текущий город: {(userCity) ? userCity : 'Томск'}</h5> 
            </div>
            <div className={s.rating_wrapper}>
                <div>
                    <Typography component="legend"><h5>Текущий рейтинг:</h5></Typography>
                </div>
                <div>
                    <Rating
                        name="simple-controlled"
                        // value={rating}
                        value={value}
                        defaultValue={3}
                        onChange={(e, newValue) => {
                            setValue(newValue);
                        }}
                    />

                </div>
               
            </div>
       
            <div className={s.text}>
                <h5>Текущие мероприятия:</h5>
            </div>
            <div className={s.content_wrapper}>
                {
                    activePoints.map(point => <PointElement getPointId={getPointId} point={point} />)
                }
            </div>
            
            <div className={s.text}>
                <h5>Прошедшие мероприятия:</h5>
            </div>
            <div className={s.content_wrapper}>
            {
                inactivePoints.map(point => <PointElement getPointId={getPointId} point={point} />)
            }
            </div>
            <button className={s.btn} onClick={handleClick}>Выйти</button>
        </div>
    );
};

export default Profile;