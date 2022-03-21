import React from 'react';
import s from './Comments.module.css'

const Comments = () => {
    return (

        <div className={s.wrap}>
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
        </div>


    );
};

export default Comments;