import React from 'react';

const aboutCompany = 'Boosted empowers people everywhere to commute across their cities, campuses, and communities in ways that were never before possible. Boosted is solving one of the biggest problems people face each day: transportation.';

const Footer = () => {
	return (
		<section className='footer'>
			<div className='about'>
				<h3>About us</h3>
				<p>{aboutCompany}</p>
			</div>
			<div className='contacts'>
				<h3>Contacts</h3>
				<p>CaliRides LLC - DBA Boosted USA</p>
				<p>1281 Andersen Drive Ste. K</p>
				<p>San Rafael, CA 94901</p>
			</div>
		</section>
	)
  }
  
  export default Footer;
