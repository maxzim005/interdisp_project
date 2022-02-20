import React from 'react';
import s from './ChooseCategory.module.css'

const ChooseCategory = () => {
    return (
        <div className={s.wrapper}>
            <h2>First of all...</h2>
            <div className='container'>
                <div className='row'> 
                    <div className='col'>
                        <div className={s.choose_city}>Пожалуйста, выберите интересующий Вас город</div>
                    </div>
                    <div className='col'>
                        <div className={s.choose_category}>Пожалуйста, выберите интересующий Вас тип досуга</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseCategory;