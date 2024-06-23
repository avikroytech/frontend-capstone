import React from 'react';

function Card(props) {
	return (
		<div className='card'>
			<div className='image'>
				<img src={props.image ? props.image : null} alt="Dish showcase photo" />
			</div>
			<div className="card-body">
				<div className='top'>
					<h4>{props.title}</h4>
					<span>{props.price}</span>
				</div>
				<p>{props.description}</p>
			</div>
			<div className="order">
				<h4><a href="">Order a delivery</a></h4>
			</div>
		</div>
	);
}

export default Card;