import React, { useState } from 'react';
import s from './Login.module.css'
import PropTypes from 'prop-types';
import Registration from './Registration'


const Login = ({ setToken, setUnreg }) => {

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    async function loginUser(credentials) {
        return fetch('https://nestjs-boilerplate-test.herokuapp.com/api/v1/auth/email/login', {
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
            email,
            password
        });
        setToken(token);
        console.log(token.token);
        localStorage.setItem('authToken', token.token)
    }
    const handleClick = () => {
        setUnreg(true);
        console.log('UNREG')
    }
    return (
        <div className={s.wrapper}>
            <div className={s.text}>Login</div>
            <div className={s.login_wrapper}>
                <form onSubmit={handleSubmit} className={s.form_style}>
                    <label>
                        <p>Username</p>
                        <input type="text" onChange={e => setEmail(e.target.value)} />
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
