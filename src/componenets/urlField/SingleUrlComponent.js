import React, { useState } from 'react';
import './SingleUrlComponent.css';

const SingleURLComponent = () => {
	const [url, setUrl] = useState('');

	const handleInputChange = (event) => {
		setUrl(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// Perform any necessary actions with the URL
		console.log(`Submitted URL: ${url}`);
	};

	return (
		<div className='url-form-component'>
			<form onSubmit={handleSubmit}>
				<label className='input-label' htmlFor='urlInput'>
					Enter URL:
				</label>
				<input
					id='urlInput'
					type='text'
					value={url}
					onChange={handleInputChange}
					placeholder='Enter a URL'
				/>
				<button className='submit-button' type='submit'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default SingleURLComponent;
