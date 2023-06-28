import React, { useState } from 'react';
import './MultiURLComponent.css';

const MultiURLComponent = () => {
	const [urls, setUrls] = useState([]);

	const handleInputChange = (event) => {
		const inputUrls = event.target.value.split('\n');
		setUrls(inputUrls);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// Perform any necessary actions with the URLs
		console.log(`Submitted URLs:`, urls);
	};

	return (
		<div className='multi-url-component'>
			<form onSubmit={handleSubmit}>
				<label htmlFor='urlInput'>Enter URLs:</label>
				<textarea
					id='urlInput'
					rows={4}
					value={urls.join('\n')}
					onChange={handleInputChange}
				/>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default MultiURLComponent;
