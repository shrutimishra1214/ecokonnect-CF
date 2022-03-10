import React, { useState, useEffect, useRef } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { InitializeAnalytics } from '../../utils/analytics';

import HomePage from './home-page';

const Home = () => {
	const [start, setStart] = useState(false);
	const homePageRef = useRef(null);

	useEffect(() => {
		try {
			InitializeAnalytics();
		} catch (err) {
			console.log('HOTJAR not working on local');
		}
	}, []);

	const handleIntro = () => {
		setStart(true);
	};

	return (
		<SwitchTransition mode='out-in'>
			<CSSTransition
				key={start}
				timeout={700}
				addEndListener={(node, done) => {
					node.addEventListener('transitionend', done, false);
				}}
				classNames='fade'>
				<HomePage start={start} handleIntro={handleIntro} />
			</CSSTransition>
		</SwitchTransition>
	);
};

export default Home;
