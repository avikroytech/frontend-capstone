import React from 'react';
import cooking from '../assets/Mario and Adrian A.jpg';
import talking from '../assets/Mario and Adrian b.jpg';

function About() {
	return (
		<article className='about'>
			<div className='description'>
				<div className='about-title'>
					<h1>Little Lemon</h1>
					<h3>Chicago</h3>
				</div>
				<p>
				Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
				The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12-15 items that they rotate seasonally.
				The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.
				</p>
			</div>
			<div className='images'>
				<img src={cooking} alt="Adrian and Mario cooking"/>
				{/* <img src={talking} alt="Adrian and Mario talking"/> */}
			</div>
		</article>
	);
}

export default About;