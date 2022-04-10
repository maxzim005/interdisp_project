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

    }

    const handleClick = () => {
        setUnreg(false);
        navigate('/login');
    }

    return (
        <div className={s.wrapper}>
            <div className={s.text}>Registration</div>
            <div>
                <form onSubmit={handleSubmit} className={s.form_style}>
                    <label>
                        <p>Email</p>
                        <input type="text" onChange={e => setEmail(e.target.value)}/>
                    </label>
                    <label>
                        <p>Login</p>
                        <input type="text" onChange={e => setLogin(e.target.value)}/>
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" onChange={e => setPassword(e.target.value)}/>
                    </label>
                    
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
                <div className={s.text_reg}>Already have an account?</div>
                <button className={s.redirect_to_log} onClick={handleClick}>Click here</button>
            </div>
        </div>
    );
};

export default Registration;