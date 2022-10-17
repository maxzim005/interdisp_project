import React, { useEffect, useState } from 'react';
import s from './Login.module.css'
import PropTypes from 'prop-types';
import Registration from './Registration'
import { useNavigate} from 'react-router-dom';


const Login = ({ setToken, setUnreg }) => {

    const navigate = useNavigate();

    const [username, setUsername] = useState();
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [failedAuth, setFailedAuth] = useState(false);
    useEffect(() => {
    }, [loginUser])

    async function loginUser(credentials) {
        return fetch("https://wasite.herokuapp.com/auth/token/login/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
            .then(data => data.json())
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            login,
            password
        });
        setToken(token.auth_token);
        console.log(token.auth_token);
        if (token.auth_token) {
            localStorage.setItem('authToken', token.auth_token);
            navigate('/');
            window.location.reload();
            setFailedAuth(false);
        }
        else {
            setFailedAuth(true);
        }
        // localStorage.setItem('authToken', token.auth_token);
        // navigate('/');
        // window.location.reload();
    }
    const handleClick = () => {
        setUnreg(true);
        navigate('/registration');
    }

    return (
        <div className={s.wrapper}>
            <div className={s.text}>Авторизация</div>
            <div className={s.login_wrapper}>
                <form onSubmit={handleSubmit} className={s.form_style}>
                    <label>
                        <p className={s.login_text}>Логин</p>
                        <input className={s.login} type="text" onChange={e => setLogin(e.target.value)} />
                    </label>
                    <label>
                        <p className={s.password_text}>Пароль</p>
                        <input className={s.password} type="password" onChange={e => setPassword(e.target.value)} />
                    </label>
                    <div>
                        <button className={s.send_btn} type="submit">Отправить</button>
                    </div>
                </form>
                <div className={s.text_failure}>{failedAuth ? <div>Упс! Что-то пошло не так.</div> : ''}</div>
                <div className={s.text_reg}>Еще не зарегистрированы?</div>
                <button className={s.redirect_to_reg} onClick={handleClick}>Нажмите сюда!</button>  
            </div>
        </div>
    );
};
Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;
