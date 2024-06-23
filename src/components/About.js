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
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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