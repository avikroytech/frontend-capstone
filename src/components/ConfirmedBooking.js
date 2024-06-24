import React from 'react';
import { Link } from 'react-router-dom';

function ConfirmedBooking() {
	return (
		<article className='confirmation'>
			<h1>Booking Confirmed!</h1>
			<Link to="/" className='button'>Go back to home page</Link>
		</article>
	);
}

export default ConfirmedBooking;