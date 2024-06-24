import React from 'react';
import TestimonialCard from './TestimonialCard';
import john from '../assets/john.jpg';
import sally from '../assets/sally.jpg';
import alfred from '../assets/alfred.jpg';
import denice from '../assets/denice.jpg';

function Testimonials() {
	return (
		<>
			<article className='testimonial-bg'>
				<h2>TESTIMONIALS</h2>
				<div className='testimonial-card-group'>
					<TestimonialCard name="John" image={john} rating={3} />
					<TestimonialCard name="Sally" image={sally} rating={4} />
					<TestimonialCard name="Alfred" image={alfred} rating={5} />
					<TestimonialCard name="Denice" image={denice} rating={4} />
				</div>
			</article>
		</>
	);
}

export default Testimonials;