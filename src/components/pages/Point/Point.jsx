import React from 'react';
import Comments from './Comments/Comments';
import s from './Point.module.css'

const Point = () => {
    return (
        <div className={s.wrapper}>
            <h1>Zen</h1>
            <div className={s.info}>
                <img src="http://sun9-77.userapi.com/sun9-48/impf/SL0wfexmbM-OveJrpFP1bZhkm_GtRC06CndxuA/hpiYRBExlUM.jpg?size=1590x400&quality=95&crop=0,0,1500,377&sign=a3480d280467883c4a9a84746bebd733&type=cover_group
                " alt="" />
                <h4>sample text lorem ipsum sample text lorem ipsum sample text lorem ipsum sample text lorem ipsum sample text lorem ipsum sample text lorem ipsum sample text lorem ipsum sample text lorem ipsum sample text lorem ipsum sample text lorem ipsum sample text lorem ipsum sample text lorem ipsum sample text lorem ipsum sample text lorem ipsum sample text lorem ipsum sample text lorem ipsum sample text lorem ipsum</h4>
            </div>
            <div className={s.org}>
                <h1>Организатор</h1>

                <img className={s.org_icon} src="https://свободное-время.онлайн/storage/app/organizer/ZNPsWdmCp4tzApsa6sHFwJpH9EoyAHek9QXu7JMQ.jpeg" alt="" />
                <h4>Username</h4>

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
                <Comments />
                <Comments />
                <Comments />

                <div className={s.my_comment}>
                    <div className={s.wrap}>
                        Ваш комментарий:
                        <textarea className={s.my_comment_text} name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <button className={s.btn}>Отправить</button>
                </div>


            </div>


        </div>


    );
};

export default Point;