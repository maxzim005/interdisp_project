import React, { useState, useEffect } from 'react';
import s from './Profile.module.css'
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const Profile = () => {
    const [username, setUsername] = useState();
    const [rating, setRating] = useState(0);
    const [userCity, setUserCity] = useState();
    const [value, setValue] = useState(2);
    const [userId, setUserId] = useState();

    useEffect(() => {
        fetchInfo()
    }, [])

    useEffect(() => {
        getInfo()
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
            console.log(response);
            setUsername(response.data.login);
            setRating(response.data.rating);
            setUserCity(response.data.userCity);

        } catch (error) {
            if (error.response) {
                console.log(error.response)
            }
        }
    }



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
        </div>
    );
};

export default Profile;