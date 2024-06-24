import React from 'react';
import Card from './Card';
import {Link} from 'react-router-dom';
import greekSalad from '../assets/greek salad.jpg';
import bruchetta from '../assets/bruchetta.svg';
import lemonDessert from '../assets/lemon dessert.jpg'

let cardDescriptions = {
	greekSalad: "The famous greek salad of cripsy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
	bruschetta: "Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
	lemonDessert: "This comes straight from grandma's recipe book, every last ingerdien has been sourced and is as authentic as can be imagined."
}

function Specials() {
	return (
		<>
			<article>
				<div className='heading'>
					<h3>This weeks specials!</h3>
					<Link to="/" className='button'>Online Menu</Link>
				</div>
				<div className='card-group'>
					<Card title="Greek Salad" price="$12.99" description={cardDescriptions.greekSalad} image={greekSalad}/>
					<Card title="Bruschetta" price="$5.99" description={cardDescriptions.bruschetta} image={bruchetta}/>
					<Card title="Lemon Dessert" price="$5.00" description={cardDescriptions.lemonDessert} image={lemonDessert}/>
				</div>
			</article>
		</>
	)
}

export default Specials;