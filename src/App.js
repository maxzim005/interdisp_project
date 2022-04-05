import React,{ useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import ChooseCategory from './components/pages/ChooseCategory/ChooseCategory';
import ListOfPoints from './components/pages/ListOfPoints/ListOfPoints';
import MapOfPoints from './components/pages/MapOfPoints/MapOfPoints';
import Point from './components/pages/Point/Point';
import MainPage from './components/pages/MainPage/MainPage';
import Navbar from './components/UI/Navbar/Navbar';
import Profile from './components/pages/Profile/Profile';
import './index.css';
import Login from './components/auth/Login';
import Registration from './components/auth/Registration';

function App() {

	const [token, setToken] = useState();
	const [unreg, setUnreg] = useState(false);

	if(!(localStorage.length > 0) && !unreg) {
		return (<div><Navbar /> <Login setToken={setToken} setUnreg={setUnreg} /></div>)	
	  }
	if(!(localStorage.length > 0) && unreg) {
		return (<div><Navbar /> <Registration setUnreg={setUnreg}/></div>)
	}

	return (
		<div className='app-wrapper'>
			<Navbar />
			<Routes>
				<Route exact path='/' element={<MainPage/>} />
				<Route path='/choose_category' element={<ChooseCategory/>} />
				<Route path='/list_of_points' element={<ListOfPoints/>} />
				<Route path='/map_of_points' element={<MapOfPoints/>} />
				<Route path='/point' element={<Point/>} />
				<Route path='/profile' element={<Profile/>} />
				<Route path='/login' element={<Login/>} />
				<Route path='/registration' element={<Registration/>} />
			</Routes>
		</div>
	);
}

export default App;
