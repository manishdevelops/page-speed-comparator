import React from 'react';
import URLFormComponent from '../urlField/URLFormComponent';
import Cards from '../cardSection/cards';
import PerformanceFeatures from '../features/features';
import FeedbackSection from '../feedback/feedbackSection';
import Accordion from '../Questions/frequentQuestion';

const Body = () => {
	return (
		<>
			<URLFormComponent />
			<Cards />
			<PerformanceFeatures />
			<FeedbackSection />
			<Accordion />
		</>
	);
};

export default Body;
