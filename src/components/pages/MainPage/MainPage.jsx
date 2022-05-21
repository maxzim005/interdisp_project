import React from 'react';
import s from './MainPage.module.css'
import Fig_1 from '../../../img/Fig_1.svg'
import Fig_1_1 from '../../../img/Fig_1_1.svg'
import Fig_2 from '../../../img/Fig_2.svg'
import Waves from '../../../img/Waves.svg'
import { NavLink } from 'react-router-dom';

const MainPage = () => {
    return (
        <div className={s.wrapper}>
            <img className={s.fig_1} src={Fig_1} alt="" />
            <img className={s.fig_2} src={Fig_1_1} alt="" />
            <h1>Добро пожаловать в Whats Around</h1>
            <h3>Whats Around - это сервис, позволяющий находить 
интересное рядом. Присоединяйтесь к нам прямо сейчас!
            </h3>
              <NavLink className={s.link} to='/choose_category'> <button className={s.btn}>Начать</button> </NavLink> 
            <img className={s.waves} src={Waves} alt="" />
        </div>
    );
};

export default MainPage;