import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import s from './Registration.module.css'

const Registration = ({setUnreg}) => {

    const navigate = useNavigate();
    
    const [email, setEmail] = useState();
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();

    useEffect(() => {
    }, [regUser])

    async function regUser() {
        return axios.post('https://wasite.herokuapp.com/api/users/', {
        email,
        password,
        login,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await regUser({
            email,
            password,
            login,
        });
        navigate('/login');
        window.location.reload();
    }

    const handleClick = () => {
        setUnreg(false);
        navigate('/login');
    }

    return (
        <div className={s.wrapper}>
            <div className={s.text}>Регистрация</div>
            <div>
                <form onSubmit={handleSubmit} className={s.form_style}>
                    <label>
                        <p className={s.email_text}>Email</p>
                        <input className={s.email} type="text" onChange={e => setEmail(e.target.value)}/>
                    </label>
                    <label>
                        <p className={s.login_text}>Логин</p>
                        <input className={s.login} type="text" onChange={e => setLogin(e.target.value)}/>
                    </label>
                    <label>
                        <p className={s.password_text}>Пароль</p>
                        <input className={s.password} type="password" onChange={e => setPassword(e.target.value)}/>
                    </label>
                    <label>
                        <p className={s.password_ac_text}>Подтвердите пароль</p>
                        <input className={s.password_ac} type="password" />
                    </label>
                    <div>
                        <button className={s.send_btn} type="submit">Отправить</button>
                    </div>
                </form>
                <div className={s.text_reg}>Уже есть аккаунт?</div>
                <button className={s.redirect_to_log} onClick={handleClick}>Нажмите сюда!</button>
            </div>
        </div>
    );
};

export default Registration;