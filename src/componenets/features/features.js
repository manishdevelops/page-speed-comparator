import React from 'react';
import './features.css';

const PerformanceFeatures = () => {
	return (
		<div className='performance-features'>
			<h2 className='features-heading'>Web Performance Features</h2>
			<div className='features-container'>
				<div className='feature'>
					<div className='feature-icon'>🚀</div>
					<h3 className='feature-heading'>Fast Loading</h3>
					<p className='feature-description'>
						Ensure your website loads quickly and provides a smooth user
						experience.
					</p>
				</div>
				<div className='feature'>
					<div className='feature-icon'>🎯</div>
					<h3 className='feature-heading'>Optimized Resources</h3>
					<p className='feature-description'>
						Optimize your assets, such as images and scripts, to minimize file
						sizes and reduce load times.
					</p>
				</div>
				<div className='feature'>
					<div className='feature-icon'>🔒</div>
					<h3 className='feature-heading'>Secure Connections</h3>
					<p className='feature-description'>
						Implement HTTPS and security best practices to protect user data and
						build trust.
					</p>
				</div>
			</div>
		</div>
	);
};

export default PerformanceFeatures;
