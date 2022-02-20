import React from 'react';
import s from './ListOfPoints.module.css'

const ListOfPoints = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.current_city}>Current city: Tomsk</div>
            <div className={s.switcher}>SWITCHER</div>
            <div className={s.current_category}>Current category</div>
            <div className={s.sort_by}>sort by: </div>
            <div>LIST OF POINTS</div>
        </div>
    );
};

export default ListOfPoints;