import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './PointElement.module.css';
import { useNavigate } from 'react-router-dom';

const PointElement = ({ point, getPointId }) => {
    const navigate = useNavigate();

    const [pointId, setPointId] = useState(point.pointId);
    const [photoUrl, setPhotoUrl] = useState("https://свободное-время.онлайн/storage/app/organizer/ZNPsWdmCp4tzApsa6sHFwJpH9EoyAHek9QXu7JMQ.jpeg");

    useEffect(() => {
        try {
            if (point.photos[0].photo) {
                setPhotoUrl(point.photos[0].photo);
                console.log(point.photos[0].photo);
            }
        } catch (error) {
            if (error.response) {
                console.log(error.response)
            }
        }
    }, [])

    const handleClick = () => {
        getPointId(pointId);
        navigate(`/point/`);
    }
    return (
        <div className={s.element}> 
            <div className={s.img_wrap}>
                <img className={s.org_icon} src={photoUrl} alt="" />
            </div>
            <div className={s.elem_text} onClick={handleClick}>{point.name}</div>
        </div>
    );
};

export default PointElement;