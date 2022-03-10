import React from 'react';
import ReactDOM from 'react-dom';

import { render, fireEvent, cleanup } from '@testing-library/react';
import Home from '../components/Home/home';
import Theme from '../Theme';

afterEach(cleanup);

it('Text in state is changed when button clicked', () => {
	const { getByText } = render(
		<Theme>
			<Home />
		</Theme>
	);

	expect(getByText(/CALCULATE/i)).toBeInTheDocument();

	fireEvent.click(getByText('Start Calculation'));

	expect(getByText(/POLLUTE/i).textContent).toBe(
		'Do you wanna know if you pollute more or less than the average? ClicK Start!'
	);
});

// it('button click changes props', () => {
//   const { getByText } = render(<App>
//                                 <TestHook />
//                                </App>)

//   expect(getByText(/Moe/i).textContent).toBe("Moe")

//   fireEvent.click(getByText("Change Name"))

//   expect(getByText(/Steve/i).textContent).toBe("Steve")
// })
