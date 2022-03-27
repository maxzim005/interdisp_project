import axios from 'axios';
import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import s from './Registration.module.css'

const Registration = () => {
    
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();

    async function regUser() {
        return axios.post('https://nestjs-boilerplate-test.herokuapp.com/api/v1/auth/email/register', {
        email,
        password,
        firstName,
        lastName,
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
            firstName,
            lastName,
        });
    }

    return (
        <div className={s.wrapper}>
            <div className={s.text}>Registration</div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        <p>Email</p>
                        <input type="text" onChange={e => setEmail(e.target.value)}/>
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" onChange={e => setPassword(e.target.value)}/>
                    </label>
                    <label>
                        <p>First name</p>
                        <input type="text" onChange={e => setFirstName(e.target.value)}/>
                    </label>
                    <label>
                        <p>Last name</p>
                        <input type="text" onChange={e => setLastName(e.target.value)}/>
                    </label>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
                <div className={s.text_reg}>Already have an account?</div>
                <NavLink className={s.link + ' offset-5 col-1'} to='/login'>Click here</NavLink>
            </div>
        </div>
    );
};

export default Registration;