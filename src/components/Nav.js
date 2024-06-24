import React from 'react';
import navLogo from '../assets/nav_logo.png';
import { Link } from 'react-router-dom';

function Nav() {
	return (
		<nav>
			<ul className='navigation'>
				<img src={navLogo} alt="Little Lemon logo"/>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/">About</Link></li>
				<li><Link to="/">Menu</Link></li>
				<li><Link to="/booking">Reservations</Link></li>
				<li><Link to="/">Order Online</Link></li>
				<li><Link to="/">Login</Link></li>
			</ul>
		</nav>
	)
}

export default Nav;