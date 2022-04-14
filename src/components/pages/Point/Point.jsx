import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Comments from './Comments/Comments';
import s from './Point.module.css'

const Point = ({ pointId }) => {
    const [pointData, setPointData] = useState();
    const [username, setUsername] = useState();
    const [commentValue, setCommentValue] = useState('');
    const [comments, setComments] = useState([]);

    const [userId, setUserId] = useState();
    useEffect(() => {
        fetchInfo()
    }, [])
    async function fetchInfo() {
        try {
            const response = await axios.get("https://wasite.herokuapp.com/api/auth/users/me/", {
                headers: {
                    Authorization: `Token ${localStorage.getItem('authToken')}`
                }
            });
            setUserId(response.data.userId);
        } catch (error) {
            if (error.response) {
                console.log(error.response)
            }
        }
    }

    useEffect(() => {
        fetchPoint()
    }, [])

    useEffect(() => {
        getUsername()
    }, [fetchPoint])

    async function fetchPoint() {
        try {
            const response = await axios.get(`https://wasite.herokuapp.com/api/points/${pointId}`, {
                headers: {
                    Authorization: `Token ${localStorage.getItem('authToken')}`
                }
            });
            console.log(response.data);
            setPointData(response.data);
            setComments(response.data.point_messages);
        } catch (error) {
            if (error.response) {
                console.log(error.response)
            }
        }
    }

    async function getUsername() {
        try {
            const response = await axios.get(`https://wasite.herokuapp.com/api/users/${pointData.userId}/`, {
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

    async function sendComment() {
        try {
            const response = await axios.post("https://wasite.herokuapp.com/api/pointmessages/", {
                userId: userId,
                pointId: pointId,
                pointMessageContent: commentValue,
            },
                {
                    headers: {
                        Authorization: `Token ${localStorage.getItem('authToken')}`
                    },
                }
            );
            if (commentValue) {
                setCommentValue('');
            }
        } catch (error) {
            if (error.response) {
                console.log(error.response)
            }
        }
    }

    const handleValue = (e) => {
        setCommentValue(e.target.value);
    };

    const handleComment = async e => {
        const token = await sendComment({
            userId,
            pointId,
            commentValue,
        });
        setCommentValue('');
        fetchPoint();
    }

    return (
        <div className={s.wrapper}>
            <h1>{pointData ? pointData.name : 'DEFAULT'}</h1>
            <div className={s.info}>
                <img src="http://sun9-77.userapi.com/sun9-48/impf/SL0wfexmbM-OveJrpFP1bZhkm_GtRC06CndxuA/hpiYRBExlUM.jpg?size=1590x400&quality=95&crop=0,0,1500,377&sign=a3480d280467883c4a9a84746bebd733&type=cover_group
                " alt="" />
                <h4>{pointData ? pointData.description : 'DEFAULT'}</h4>
            </div>
            <div className={s.org}>
                <h1>Организатор</h1>

                <img className={s.org_icon} src="https://свободное-время.онлайн/storage/app/organizer/ZNPsWdmCp4tzApsa6sHFwJpH9EoyAHek9QXu7JMQ.jpeg" alt="" />
                <h4>{username ? username : 'DEFAULT'}</h4>

                {/* <div className={s.wrap}>
                    <div className={s.comment}>
                        <div className={s.user}>
                            <div className={s.circle}>
                                <img src="https://obzor.city/data/images/news_2016/01/ve4erinki/57.jpg" alt="" />
                            </div>
                            <div>Участник 1</div>
                        </div>
                        <div className={s.text}>
                            sample text lorem ipsum sample text lorem ipsum sample text lorem ipsum sample text lorem ipsum sample

                        </div>
                    </div>
                </div> */}
          
                {
                    comments.map(comment => <Comments userId={userId} comment={comment} />)
                }
                <div className={s.my_comment}>
                    <div className={s.wrap}>
                        Ваш комментарий:
                        <textarea className={s.my_comment_text} onChange={handleValue} value={commentValue} name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <button className={s.btn} onClick={handleComment} >Отправить</button>
                </div>


            </div>


        </div>


    );
};

export default Point;