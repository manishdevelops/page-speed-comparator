import React from 'react';
import './cardComponent.css';

const CardComponent = () => {
	return (
		<div className='card'>
			<img
				className='card-logo'
				src='https://tse1.mm.bing.net/th?id=OIP.UJ2vACrcxBESNGI8HPeckQHaGv&pid=Api&rs=1&c=1&qlt=95&h=180'
				alt='Logo'
			/>
			<h2 className='card-heading'>Card Heading 1</h2>
			<h3 className='card-subheading'>Card Subheading 2</h3>
			<p className='card-paragraph'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
				vestibulum mi et est pellentesque, nec iaculis sapien rutrum. In eu leo
				quam. Pellentesque habitant morbi tristique senectus et netus et
				malesuada fames ac turpis egestas.
			</p>
		</div>
	);
};

export default CardComponent;
