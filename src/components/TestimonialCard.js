import React from 'react';

function TestimonialCard(props) {
	return (
		<div className='testimonial-card'>
			<h4>Rating</h4>
			<div>
				<img alt="User profile picture" />
				<h4>{props.name}</h4>
			</div>
			<h4>{props.rating} Stars</h4>
		</div>
	);
}

export default TestimonialCard;