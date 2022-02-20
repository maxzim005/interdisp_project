import React from 'react';
import RateStars from '../../UI/RateStars';
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.wrapper}>
            Hello, username!
            <RateStars />
            <br />
            <input type="text"/>
            <br />
            Архив

        </div>
    );
};

export default Profile;