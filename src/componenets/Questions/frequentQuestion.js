import { FaArrowUp } from 'react-icons/fa';

import React, { useState } from 'react';
import './frequentQuestion.css';

const Accordion = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const toggleAccordion = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	const faqs = [
		{
			question: 'What is the pricing for your services?',
			answer:
				'Our pricing plans vary based on the specific services you require. Please contact our sales team for more information.',
		},
		{
			question: 'How can I contact customer support?',
			answer:
				'You can reach our customer support team by phone, email, or through our online chat system. Visit our Contact Us page for more details.',
		},
		{
			question: 'Do you offer refunds?',
			answer:
				'We have a refund policy in place for certain cases. Please review our Terms and Conditions or contact our support team for further assistance.',
		},
		{
			question: 'Can I prefill a URL using a URL-parameter?',
			answer:
				'Yes, by adding the URL-parameter url you can prefill a single URL. If you request the URL with this URL-parameter in the browser, the form will be submitted automatically.Drag PageSpeed Compare to your toolbar to open the URL in your current browser tab in PageSpeed Compare.',
		},
	];

	return (
		<section className='accordion'>
			<h2 className='accordion-heading'>Most frequently asked questions</h2>
			<section className='faqs'>
				{faqs.map((faq, index) => (
					<div
						key={index}
						className={`accordion-item ${
							activeIndex === index ? 'active' : ''
						}`}
						onClick={() => toggleAccordion(index)}
					>
						<div className='accordion-header'>
							<h3 className='accordion-question'>{faq.question + '  '}</h3>
							<span
								className={`accordion-icon ${
									activeIndex === index ? 'active' : ''
								}`}
							>
								<FaArrowUp className='arrow-icon' />
							</span>
						</div>
						{activeIndex === index && (
							<p className='accordion-answer'>{faq.answer}</p>
						)}
					</div>
				))}
			</section>
		</section>
	);
};

export default Accordion;
