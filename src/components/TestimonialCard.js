import React from 'react';

function TestimonialCard(props) {
	const ratingStars = () => {
		let result = "";
		for (let i=0; i < props.rating; i++) {
			result += "★";
		}

		return result;
	}

	return (
		<div className='testimonial-card'>
			<h4>Rating</h4>
			<div>
				<img src={props.image} alt="User profile picture" />
				<h4>{props.name}</h4>
			</div>
			<h4 className='rating'>{ratingStars()}</h4>
		</div>
	);
}

export default TestimonialCard;