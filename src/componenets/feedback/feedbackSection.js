import React from 'react';
import './feedbackSection.css';

const FeedbackSection = () => {
	const feedbacks = [
		{
			id: 1,
			name: 'John Doe',
			comment:
				'The page speed has improved significantly compared to before. Great work!',
		},
		{
			id: 2,
			name: 'Jane Smith',
			comment:
				"I'm impressed with the faster loading times. The website feels much smoother now.",
		},
		{
			id: 3,
			name: 'Mike Johnson',
			comment:
				'The optimized resources have made a noticeable difference in speed. Excellent job!',
		},
		{
			id: 4,
			name: 'John Doe',
			comment:
				'The page speed has improved significantly compared to before. Great work!',
		},
		{
			id: 5,
			name: 'Jane Smith',
			comment:
				"I'm impressed with the faster loading times. The website feels much smoother now.",
		},
		{
			id: 6,
			name: 'Mike Johnson',
			comment:
				'The optimized resources have made a noticeable difference in speed. Excellent job!',
		},
		{
			id: 7,
			name: 'John Doe',
			comment:
				'The page speed has improved significantly compared to before. Great work!',
		},
		{
			id: 8,
			name: 'Jane Smith',
			comment:
				"I'm impressed with the faster loading times. The website feels much smoother now.",
		},
		{
			id: 9,
			name: 'Mike Johnson',
			comment:
				'The optimized resources have made a noticeable difference in speed. Excellent job!',
		},
		{
			id: 10,
			name: 'John Doe',
			comment:
				'The page speed has improved significantly compared to before. Great work!',
		},
	];

	return (
		<div className='feedback-section'>
			<h2 className='section-heading'>What other users are saying</h2>
			<h3 className='section-heading-2'>
				What people love about PageSpeed Compare.
			</h3>
			<div className='feedbacks'>
				{feedbacks.map((feedback) => (
					<div key={feedback.id} className='feedback'>
						<img
							className='user-dp'
							src='https://tse1.mm.bing.net/th?id=OIP.l6nPLCiWuJkhte2Ru60fdQAAAA&pid=Api&P=0&h=180'
							alt='dp'
						/>
						<h3 className='feedback-name'>{feedback.name}</h3>
						<p className='feedback-comment'>{feedback.comment}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default FeedbackSection;
