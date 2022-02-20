import React from 'react';
import s from './Point.module.css'

const Point = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.point_name}>ZEN</div>
            <div className={s.point_desc}>desc</div>
            <div className={s.point_img}>img</div>
            <div className={s.point_org}>Organisation</div>
            <div className={s.point_org_img}>Org img</div>
            <div className={s.point_org_name}>Org name</div>
            <div>LIST OF COMMENTS</div>
        </div>
    );
};

export default Point;