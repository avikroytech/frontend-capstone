import React from 'react';
import dish from '../assets/restauranfood.jpg';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';

function HomePage() {
	return (
		<main>
			<Hero />
			<Specials />
			<Testimonials />
			<About />
		</main>
	)
}

export default HomePage;