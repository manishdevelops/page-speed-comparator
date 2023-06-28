import React, { useState } from 'react';
import './FileImportComponent.css';

const FileImportComponent = () => {
	const [selectedFiles, setSelectedFiles] = useState([]);

	const handleFileChange = (event) => {
		const files = Array.from(event.target.files);
		setSelectedFiles(files);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// Perform any necessary actions with the selected files
		console.log('Selected Files:', selectedFiles);
	};

	return (
		<div className='file-import-component'>
			<form onSubmit={handleSubmit}>
				<label htmlFor='fileInput'>Select Files:</label>
				<input
					id='fileInput'
					type='file'
					multiple
					onChange={handleFileChange}
				/>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default FileImportComponent;
