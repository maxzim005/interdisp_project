import React from 'react'
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import Navbar from './components/UI/Navbar/Navbar';
import Button from './components/UI/Button';
import './index.css';

function App() {
	return (
		<div className='app-wrapper'>
			<Navbar />
			<Routes>
				<Route path='/mainpage' render={() => <MainPage />} />
				
			</Routes>
		</div>
	);
}

export default App;
