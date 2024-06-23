import React from 'react';

function Card(props) {
	return (
		<div>
			<img src={props.image} alt="Dish showcase photo" />
			<div className='top'>
				<h4>{props.title}</h4>
				<span>{props.price}</span>
			</div>
			<p>{props.description}</p>
			<h4>Order a delivery  </h4>
		</div>
	);
}

export default Card;