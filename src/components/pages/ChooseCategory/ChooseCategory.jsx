import React, { useEffect, useState } from 'react';
import s from './ChooseCategory.module.css'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const ChooseCategory = ({getCurrentCategory}) => {
    const [isChecked, setIsChecked] = useState(true);

    const [city, setCity] = useState('');
    const [leisure, setLeisure] = useState('');

    const [categories, setCategories] = useState();

    const handleChangeCity = (e) => {
        setCity(e.target.value);
    };
    const handleChangeLeisure = (e) => {
        setLeisure(e.target.value);
        console.log(e.target.value);
        getCurrentCategory(e.target.value);
    };

    // useEffect(() => {
    //     setIsChecked(!isChecked);
    // }, [leisure])

    useEffect(() => {
        fetchCategories()
    }, [])

    async function fetchCategories() {
        try {
            const response = await axios.get("https://wasite.herokuapp.com/api/tags/", {
                headers: {
                    Authorization: `Token ${localStorage.getItem('authToken')}`
                }
            });
            setCategories(response.data);
            // console.log(response.data)
        } catch (error) {
            if (error.response) {
                console.log(error.response)
            }
        }
    }

    return (
        <div className={s.wrapper}>
            <h2>Давайте начнем?</h2>
            <div className='container'>
                <div className='row'>
                    <div className={s.city_wrapper + ' col'}>
                        <div className={s.choose_city}>Пожалуйста, выберите интересующий Вас город</div>
                        <Box sx={{ maxWidth: 600 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Город</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={city}
                                    label="Age"
                                    onChange={handleChangeCity}
                                >
                                    
                                    <MenuItem value={1}>Томск</MenuItem>
                                    <MenuItem value={2}>Москва</MenuItem>
                                    <MenuItem value={3}>Санкт-Петербург</MenuItem>
                                    <MenuItem value={4}>Новосибирск</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div className={s.category_wrapper + ' col'}>
                        <div className={s.choose_category}>Пожалуйста, выберите интересующий Вас тип досуга</div>
                        <Box sx={{ maxWidth: 600 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Тип</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={leisure}
                                    label="Age"
                                    onChange={handleChangeLeisure}
                                >
                                    {categories ? categories.map(category => 
                                        <MenuItem value={category}>{category.tagName}</MenuItem>) : 'Loading...'}
                                        <MenuItem value={1}>Посмотреть все</MenuItem>
                                    {/* <MenuItem value={1}>Party (+18)</MenuItem>
                                    <MenuItem value={2}>Street sound</MenuItem>
                                    <MenuItem value={3}>Fun meeting</MenuItem>
                                    <MenuItem value={4}>Another</MenuItem> */}
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                </div>
                {isChecked ? <button><NavLink className={s.link} to='/list_of_points'>Продолжить</NavLink></button> : ``}
            </div>
        </div>
    );
};

export default ChooseCategory;