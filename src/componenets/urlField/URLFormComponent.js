import React, { useState } from 'react';
import MultiURLComponent from './MultiURLComponent';
import FileImportComponent from './FileImportComponent';
import SingleURLComponent from './SingleUrlComponent';
import './URLFormComponent.css';

const URLFormComponent = () => {
	const [url, setUrl] = useState({
		singleUrl: true,
		multipleUrl: false,
		importFile: false,
	});

	return (
		<section className='form'>
			<div className='button-container'>
				<button
					onClick={() => {
						setUrl({
							singleUrl: true,
							multipleUrl: false,
							importFile: false,
						});
					}}
				>
					⚡Single
				</button>
				<button
					onClick={() => {
						setUrl({
							singleUrl: false,
							multipleUrl: true,
							importFile: false,
						});
					}}
				>
					⚡⚡ multiple
				</button>
				<button
					onClick={() => {
						setUrl({
							singleUrl: false,
							multipleUrl: false,
							importFile: true,
						});
					}}
				>
					🗃️ import
				</button>
			</div>
			{url.singleUrl && <SingleURLComponent />}
			{url.multipleUrl && <MultiURLComponent />}
			{url.importFile && <FileImportComponent />}
		</section>
	);
};

export default URLFormComponent;
