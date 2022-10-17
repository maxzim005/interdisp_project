import React, { useEffect, useState } from 'react';
import { NavLink, Redirect, useNavigate } from 'react-router-dom';
import s from './MapOfPoints.module.css'
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import Switch from '@mui/material/Switch';
import axios from 'axios';
import PlacemarkView from './PlacemarkView';
import Comments from '../../UI/Comments/Comments';


const MapOfPoints = ({getPointId, currentCategory}) => {
    const navigate = useNavigate();
    const [checked, setChecked] = useState(true);
    const [points, setPoints] = useState([]);

    useEffect(() => {
        fetchAllPoints()
    }, [])

    async function fetchAllPoints() {
        try {
            const response = await axios.get("https://wasite.herokuapp.com/api/points/", {
                headers: {
                    Authorization: `Token ${localStorage.getItem('authToken')}`
                },
                params: {
                    tagName: currentCategory.tagName,
                },
            });
            console.log(response);
            console.log(response.data);
            setPoints(response.data);
            console.log(points);
        } catch (error) {
            if (error.response) {
                console.log(error.response)
            }
        }
    }

    const handleChange = (e) => {
        setChecked(e.target.checked);
        navigate('/list_of_points');
    };
    
    const handleClick = (e) => {
        navigate('/add_point');
    };

    const randomColor = () => {
        let num = Math.random();
        if (num>0.75) {
            return 'green'
        }
        else if (num<0.75 && num>0.5) {
            return 'red'
        }
        else if (num<0.5 && num>0.25) {
            return 'purple'
        }
        else {
            return 'yellow'
        }
    }

    return (
        <div className={s.wrapper}>
            <div className={s.top_container}>
                <div className={s.current_wrapper}>
                    <div className={s.current_city}>Текущий город: Томск</div>
                    <div className={s.current_category}>Текущая категория: Прятки</div>
                </div>

                <div className={s.switch_wrapper}>
                    <Switch
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                        color="warning"
                    />
                    <div className={s.text}>
                        Переключиться на список
                    </div>
                </div>
            </div>


            <div className={s.chosen_point}>Интерактивная карта</div>
            <div className={s.main_section}>
            
                {/* <div className={s.left_side}>
                    <div className={s.chosen_point}>Мероприятие</div>
                    <div className={s.comments}>Комментарии:</div>
                    <div className={s.comments_section}>
                        <div className={s.comments_wrap}>
                            <Comments />
                            <Comments />
                            <Comments />
                        </div>


                        <div className={s.my_comment}>                          
                                <textarea className={s.my_comment_text} name="" id="" ></textarea>
                        </div>
                    </div>
                </div> */}

                <div className={s.map}>
                    <YMaps>
                        <Map defaultState={{ center: [56.474192, 84.970737], zoom: 13 }} width='1100px' height='430px'>
                            {points.map(point =>
                            <PlacemarkView getPointId={getPointId} point={point}/>)}
                            <Placemark defaultGeometry={[56.478751996178545, 84.9980311589355]} options ={{iconColor: 'blue'}}/>
                            <Placemark defaultGeometry={[56.47428700552399, 84.99837448168945]} options ={{iconColor: 'red'}}/>
                            <Placemark defaultGeometry={[56.47143673573343, 84.97159530688472]} options ={{iconColor: 'green'}}/>
                            <Placemark defaultGeometry={[56.47780204233418, 84.97588684130854]} options ={{iconColor: 'purple'}}/>
                            <Placemark defaultGeometry={[56.46906134675953, 84.97382690478513]} options ={{iconColor: 'orange'}}/>
                        </Map>
                    </YMaps>
                </div>
            </div>


            <button className={s.btn} onClick={handleClick}>Добавить</button>
        </div>
    );
};

export default MapOfPoints;