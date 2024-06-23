import React from 'react';
import dish from '../assets/restauranfood.jpg';

function Hero() {
	return (
		<article className='hero'>
			<div>
				<h1>Little Lemon</h1>
				<h3>Chicago</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua.
				</p>

				<a href="" >Reserve a table</a>
			</div>
			<img src={dish} alt="Image of restaurant dish" />
		</article>
	)
}

export default Hero;