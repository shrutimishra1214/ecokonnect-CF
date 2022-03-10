import React from 'react';
import { Link } from 'react-router-dom';

import './ErrorPage.css';

export const ErrorPage = () => {
	return (
		<div className='ErrorWrapper'>
			{/* <img src={errorImg} alt='ErrorImage' className='ErrorImage' /> */}
			<div className='ErrorPage'>
				<div className='space'>
					Er<span className='R'>r</span>o<span>r</span>
				</div>
				<div>
					<span className='off'>4</span>0
					<div id='hangEdge'>
						<span>4</span>
					</div>
				</div>
				<h1 className='errorText'>Page Not Found!</h1>
				<Link to='/'>
					<button className='errorButton'>Go Back!</button>
				</Link>
			</div>
		</div>
	);
};
