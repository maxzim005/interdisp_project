import React from 'react';
import s from './ListOfPoints.module.css'
import PointElement from './PointElement';

const ListOfPoints = () => {
    const mass = ['ZEN', 'MISHKI', 'TEST1', 'TEST2', 'ZEN', 'MISHKI', 'TEST1', 'TEST2', 'ZEN', 'MISHKI', 'TEST1', 'TEST2', 'ZEN', 'MISHKI', 'TEST1', 'TEST2',]
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.current_city}>Current city: Tomsk</div>
                <div className={s.current_category}>Current category</div>
                <div className={s.sort_by}>sort by: </div>
                <div>LIST OF POINTS</div>
                <div className={s.content_wrapper}>
                        {
                            mass.map(point => <PointElement point={point} />)
                        }
                </div>
            </div>
        </div>
    );
};

export default ListOfPoints;