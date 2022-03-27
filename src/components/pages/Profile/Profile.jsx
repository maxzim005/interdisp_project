import React, { useState } from 'react';
import s from './Profile.module.css'
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const Profile = () => {
    const [username, setUsername] = useState('Maxim')
    const [value, setValue] = useState(2);
    
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.username}>Hi,{username}!</div>
            </div>
            <Typography component="legend">Rating</Typography>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
        </div>
    );
};

export default Profile;