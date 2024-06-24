import React from 'react';
import dish from '../assets/restauranfood.jpg';

function Hero() {
	return (
		<article className='hero'>
			<div>
				<h1>Little Lemon</h1>
				<h3>Chicago</h3>
				<p>
					We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
				</p>

				<a href="/booking" className='button'>Reserve a table</a>
			</div>
			<div className='hero-image'>
				<img src={dish} alt="Image of restaurant dish" />
			</div>
		</article>
	)
}

export default Hero;