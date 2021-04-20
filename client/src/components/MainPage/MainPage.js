import React from 'react';
import './MainPage.css';

const MainPage = () => {
	return (
		<div className='main'>
			<div className='responsive'>
				<h1 className='title text-primary large'>
					Astronomical Events
				</h1>
				<iframe
					className='calendar'
					title='calendar'
					allowtransperancy='yes'
					scrolling='yes'
					src='https://in-the-sky.org/widgets/newscal.php?skin=1'
				></iframe>
			</div>
		</div>
	);
};

export default MainPage;
