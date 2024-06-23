import React from 'react';
import TestimonialCard from './TestimonialCard';

function Testimonials() {
	return (
		<>
			<article className='testimonial-bg'>
				<h2>TESTIMONIALS</h2>
				<div className='testimonial-card-group'>
					<TestimonialCard name="John" rating={3} />
					<TestimonialCard name="Sally" rating={4} />
					<TestimonialCard name="Alfred" rating={5} />
					<TestimonialCard name="Denice" rating={4} />
				</div>
			</article>
		</>
	);
}

export default Testimonials;