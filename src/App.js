import React from 'react'
import { Route, Routes } from 'react-router-dom';
import ChooseCategory from './components/pages/ChooseCategory';
import ListOfPoints from './components/pages/ListOfPoints';
import MainPage from './components/pages/MainPage/MainPage';
import Navbar from './components/UI/Navbar/Navbar';
import Profile from './components/pages/Profile';
import './index.css';

function App() {
	return (
		<div className='app-wrapper'>
			<Navbar />
			<Routes>
				{/* <Route exact path='/' render={() => <MainPage />} />
				<Route path='/choose_category' render={() => <ChooseCategory />} /> */}
				<Route exact path='/main_page' element={<MainPage/>} />
				<Route path='/choose_category' element={<ChooseCategory/>} />
				<Route path='/list_of_points' element={<ListOfPoints/>} />
				<Route path='/profile' element={<Profile/>} />
			</Routes>
		</div>
	);
}

export default App;
