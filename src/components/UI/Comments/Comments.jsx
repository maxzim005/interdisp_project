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
                    
                </div>

                <div className={s.comment_body}>
                    <div className={s.username}>Username</div>
                    <div className={s.text}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas neque commodi accusamus nisi voluptatem vitae, deserunt exercitationem quia officiis molestiae eveniet dolorem mollitia reiciendis, maxime numquam corrupti eos rerum quae.

                    </div>
                </div>


            </div>
        </div>


    );
};

export default Comments;