import axios from 'axios';
import React, { useEffect, useState } from 'react';
import s from './Comments.module.css'

const Comments = ({userId, comment}) => {
    const [username, setUsername] = useState();

    useEffect(() => {
        getInfo()
        console.log(comment);
    }, [])

    async function getInfo() {
        try {
            const response = await axios.get(`https://wasite.herokuapp.com/api/users/${comment.userId}/`, {
                headers: {
                    Authorization: `Token ${localStorage.getItem('authToken')}`
                }
            });
            setUsername(response.data.login);
        } catch (error) {
            if (error.response) {
                console.log(error.response)
            }
        }
    }

    return (

        <div className={s.wrap}>
            <div className={s.comment}>
                <div className={s.user}>
                    <div className={s.circle}>
                        <img src="https://свободное-время.онлайн/storage/app/organizer/ZNPsWdmCp4tzApsa6sHFwJpH9EoyAHek9QXu7JMQ.jpeg" alt="" />
                    </div>
                    <div className={s.username_text}>{username}</div>
                </div>
                <div className={s.text}>
                   {comment.pointMessageContent}
                </div>
            </div>
        </div>
    );
};

export default Comments;