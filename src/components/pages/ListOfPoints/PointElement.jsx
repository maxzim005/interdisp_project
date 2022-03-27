import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './PointElement.module.css'

const PointElement = ({point}) => {
    return (
        <div className={s.element}>
            <img className={s.org_icon} src="https://свободное-время.онлайн/storage/app/organizer/ZNPsWdmCp4tzApsa6sHFwJpH9EoyAHek9QXu7JMQ.jpeg" alt="" />
            <div className={s.elem_text}><NavLink className={s.elem_link}to='/point'>{point}</NavLink></div>
        </div>
    );
};

export default PointElement;