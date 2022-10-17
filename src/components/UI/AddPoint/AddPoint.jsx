import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import s from './AddPoint.module.css';
import axios from 'axios';
import InteractiveMap from './InteractiveMap';
import { Placemark } from 'react-yandex-maps';

const AddPoint = () => {
    const navigate = useNavigate();
    const [name, setName] = useState();
    const [descr, setDescr] = useState();
    const [city, setCity] = useState('Tomsk');
    const [userId, setUserId] = useState();
    const [pointCoords, setPointCoords] = useState(['Нажмите на карту!']);

    const getPointCoords = (coords) => {
        setPointCoords(coords);
        console.log(coords);
    }

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

    async function makePoint() {
        const D_now = new Date();
        D_now.toISOString();
        const D_then = new Date();
        D_then.setDate(D_then.getDate() + 1);
        D_then.toISOString();
        try {
            const response = await axios.post("https://wasite.herokuapp.com/api/points/", {
                name: name,
                description: descr,
                city: city,
                userId: userId,
                eventTime: D_now,
                timeDuration: D_then,
                latitude: pointCoords[0],
                longitude: pointCoords[1],
            },
                {
                    headers: {
                        Authorization: `Token ${localStorage.getItem('authToken')}`
                    },
                }
            );
        } catch (error) {
            if (error.response) {
                console.log(error.response)
            }
        }
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const date_start = new Date();
        const date_end = date_start + 86400000;
        const token = await makePoint({
            name,
            descr,
            city,
            userId,
            date_start,
            date_end
        });
        navigate('/map_of_points')
    }

    return (
        <div className={s.wrapper}>
            <div className={s.text}>Добавить мероприятие</div>
            <div className={s.login_wrapper}>
                <form onSubmit={handleSubmit} className={s.form_style}>
                    <label>
                        <p className={s.name_input_text}>Название мероприятия</p>
                        <input className={s.name_input} type="name" onChange={e => setName(e.target.value)} />
                    </label>

                    <label>
                        <p className={s.descr_input_text}>Описание</p>
                        <textarea className={s.descr_input} type="description" onChange={e => setDescr(e.target.value)} />
                    </label>

                    <label>
                        <p className={s.select_text}>Выбор категории</p>
                        <select name="" id="">
                            <option value="1">Концерт</option>
                            <option value="2">Зеленый</option>
                            <option value="3">Желтый</option>
                            <option value="4">Красный</option>
                            <option value="5">Оранжевый</option>
                            <option value="6">Черный</option></select>
                    </label>

                    <label>
                        <p className={s.photo_input_text}>Добавить фото</p>
                        <input className={s.photo_input} type="file" onChange={e => setDescr(e.target.value)} />
                    </label>

                    {/* <label>
                        <p className={s.coords_text}>Координаты мероприятия:</p>
                    </label>
                    <label>
                        {pointCoords}
                    </label> */}
                    <InteractiveMap getPointCoords={getPointCoords}>
                        {/* <PlacemarkView getPointId={getPointId} point={point} /> */}
                    </InteractiveMap>
                    <div>
                        <button className={s.send_btn} type="submit">Отправить</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPoint;