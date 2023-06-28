import React from 'react';
import './cards.css';
import CardComponent from './cardComponent';

const Cards = () => {
	return (
		<section className='cardSection'>
			<h1 className='head1'>TOOLING</h1>
			<h2 className='head2'>Data sources and performance metrics</h2>
			<h3 className='head3'>
				PageSpeed Compare makes use of Google PageSpeed Insights which is
				powered by Lighthouse and Chrome UX Report.
			</h3>
			<div className='card-container'>
				<CardComponent />
				<CardComponent />
				<CardComponent />
			</div>
		</section>
	);
};

export default Cards;
