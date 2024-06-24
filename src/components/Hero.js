import React from 'react';
import dish from '../assets/restauranfood.jpg';
import {Link} from 'react-router-dom';

function Hero() {
	return (
		<article className='hero'>
			<div>
				<h1>Little Lemon</h1>
				<h3>Chicago</h3>
				<p>
					We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
				</p>

				<Link to="/booking" className='button'>Reserve a table</Link>
			</div>
			<div className='hero-image'>
				<img src={dish} alt="Image of restaurant dish" />
			</div>
		</article>
	)
}

export default Hero;