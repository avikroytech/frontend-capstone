import React from 'react';
import BookingForm from './BookingForm';

function BookingPage({availableTimes, dispatch, submitForm}) {
	return (
		<>
			<div className='title'>
				<h1>Book a Reservation</h1>
				<h3>Please fill out the according details of the form.</h3>
			</div>
			<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
		</>
	);
}

export default BookingPage;