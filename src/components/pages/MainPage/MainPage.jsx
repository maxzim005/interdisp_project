import React from 'react';
import s from './MainPage.module.css'
import Fig_1 from '../../../img/Fig_1.svg'
import Fig_2 from '../../../img/Fig_2.svg'
import Waves from '../../../img/Waves.svg'

const MainPage = () => {
    return (
        <div className={s.wrapper}>
            <img className={s.fig_1} src={Fig_1} alt="" />
            <img className={s.fig_2} src={Fig_2} alt="" />
            <h1>Welcome to Whats Around</h1>
            <h3>Whats Around - это сервис, позволяющий находить 
интересное рядом. Присоединяйтесь к нам прямо сейчас!
            </h3>
            <button className={s.btn}>JOIN</button>
            <img className={s.waves} src={Waves} alt="" />
        </div>
    );
};

export default MainPage;