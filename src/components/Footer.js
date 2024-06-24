import React from 'react';
import footerLogo from '../assets/footer_logo.png';

function Footer() {
	return (
		<footer>
			<div className='footer-image'>
				<img src={footerLogo} alt="Footer logo" />
			</div>
			<div className='footer-nav'>
				<h3>Doormat Navigation</h3>
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/">About</a></li>
					<li><a href="/">Menu</a></li>
					<li><a href="/booking">Reservations</a></li>
					<li><a href="/">Order Online</a></li>
					<li><a href="/">Login</a></li>
				</ul>
			</div>

			<div className='footer-nav'>
				<h3>Contact</h3>
				<ul>
					<li><a href="/">Address</a></li>
					<li><a href="/">Phone Number</a></li>
					<li><a href="/">Email</a></li>
				</ul>
			</div>

			<div className='footer-nav'>
				<h3>Social Media Links</h3>
				<ul>
					<li><a href="/">Address</a></li>
					<li><a href="/">Phone Number</a></li>
					<li><a href="/">Email</a></li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer;