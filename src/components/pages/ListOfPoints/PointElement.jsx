import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './PointElement.module.css';
import { useNavigate } from 'react-router-dom';

const PointElement = ({point, getPointId}) => {
    const navigate = useNavigate();

    const [pointId, setPointId] = useState(point.pointId);

    const handleClick = () => {
        getPointId(pointId);
        navigate(`/point/`);
    }
    return (
        <div className={s.element}>
            <img className={s.org_icon} src="https://свободное-время.онлайн/storage/app/organizer/ZNPsWdmCp4tzApsa6sHFwJpH9EoyAHek9QXu7JMQ.jpeg" alt="" />
            <div className={s.elem_text}onClick={handleClick}>{point.name}</div>
        </div>
    );
};

export default PointElement;