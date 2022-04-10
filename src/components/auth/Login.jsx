import React, { useEffect, useState } from 'react';
import s from './Login.module.css'
import PropTypes from 'prop-types';
import Registration from './Registration'
import { useNavigate } from 'react-router-dom';


const Login = ({ setToken, setUnreg }) => {

    const navigate = useNavigate();

    const [username, setUsername] = useState();
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();

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
        localStorage.setItem('authToken', token.auth_token)
    }
    const handleClick = () => {
        setUnreg(true);
        navigate('/registration');
    }

    return (
        <div className={s.wrapper}>
            <div className={s.text}>Login</div>
            <div className={s.login_wrapper}>
                <form onSubmit={handleSubmit} className={s.form_style}>
                    <label>
                        <p>Username</p>
                        <input type="text" onChange={e => setLogin(e.target.value)} />
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" onChange={e => setPassword(e.target.value)} />
                    </label>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
                <div className={s.text_reg}>Don't have an account?</div>
                <button className={s.redirect_to_reg} onClick={handleClick}>Click here</button>  
            </div>
        </div>
    );
};
Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;
