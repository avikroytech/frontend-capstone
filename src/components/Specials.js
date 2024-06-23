import React from 'react';
import Card from './Card';
import greekSalad from '../assets/greek salad.jpg';
import bruchetta from '../assets/bruchetta.svg';
import lemonDessert from '../assets/lemon dessert.jpg'

function Specials() {
	return (
		<>
			<article>
				<div className='heading'>
					<h3>This weeks specials!</h3>
					<a className='button' href="">Online Menu</a>
				</div>
				<div className='card-group'>
					<Card title="Greek Salad" price="$12.99" description="This is a greek salad." image={greekSalad}/>
					<Card title="Bruschetta" price="$5.99" description="This is a bruschetta." image={bruchetta}/>
					<Card title="Lemon Dessert" price="$5.00" description="This is a yummy lemon dessert." image={lemonDessert}/>
				</div>
			</article>
		</>
	)
}

export default Specials;