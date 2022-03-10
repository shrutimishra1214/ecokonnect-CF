import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import HeroTitle from '../components/Home/hero-title';
import HeroBody from '../components/Home/hero-body';
import Theme from '../Theme';

test('renders text title', () => {
	const { getByText } = render(
		<Theme>
			<HeroTitle />
		</Theme>
	);
	const linkElement = getByText(/green/i);
	expect(linkElement).toBeInTheDocument();
});

test('renders text body', () => {
	const { getByText } = render(
		<Router>
			<Theme>
				<HeroBody />
			</Theme>
		</Router>
	);
	const linkElement = getByText(/Individual/i);
	expect(linkElement).toBeInTheDocument();
});
