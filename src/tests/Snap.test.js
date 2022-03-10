import React from 'react';
import ReactDOM from 'react-dom';
import Title from '../components/Home/intro-title';
import Home from '../components/Home/home-page';
import Theme from '../Theme';

import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders correctly enzyme', () => {
	const wrapper = shallow(
		<Theme>
			<Title />
		</Theme>
	);

	expect(toJson(wrapper)).toMatchSnapshot();
});

// it('renders correctly enzyme', () => {
// 	const wrapper = mount(
// 		<Theme>
// 			<Home />
// 		</Theme>
// 	);

// 	wrapper.find('button').at(0).simulate('click');

// 	const counterWrapper = wrapper.find(Title);
// 	expect(counterWrapper.find('h2')).toBe('1');
// });
