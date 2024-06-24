import React, {useReducer} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import BookingPage from './BookingPage';
import HomePage from './HomePage';
import ConfirmedBooking from './ConfirmedBooking';
import { fetchAPI, submitAPI } from '../bookingsAPI';

function Main() {
	const initializeTimes = () => {
		return fetchAPI(new Date());
	};

	const updateTimes = (state, action) => {
		return fetchAPI(new Date(action.date));
	}

	const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

	const navigate = useNavigate();

	const submitForm = (formData) => {
		const response = submitAPI(formData);

		if (response == true) {
			navigate("/confirmed");
		}
	}

	return (
		<main>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>} />
				<Route path="/confirmed" element={<ConfirmedBooking />} />
			</Routes>
		</main>
	);
}

export default Main;