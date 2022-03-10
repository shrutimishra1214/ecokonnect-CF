import React, { useState } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Theme from '../Theme';

import { Home } from '../components/Home';
import IndividualQuiz from '../components/Quiz/individual-quiz';
import BusinessQuiz from '../components/Quiz/business-quiz';
import { Result } from '../components/Result/Result';
import { Information } from '../components/NavBarPages/Information/InformationPage';
import { About } from '../components/NavBarPages/About/AboutPage';
import { Contribute } from '../components/NavBarPages/Contribute/ContributePage';
import { ErrorPage } from '../components/Error/ErrorPage';

const AppContainer = styled.div`
	color: ${(props) => props.theme.colors.secondary};
	text-align: center;
	height: 100%;
`;

const OutsideLink = () => {
	return (
		<>
			<Route
				path='/contribute/tree'
				component={() => {
					window.location.href = 'https://teamtrees.org/';
					return null;
				}}
			/>
			<Route
				path='/contribute/wwf'
				component={() => {
					window.location.href = 'https://www.wwf.org.uk/';
					return null;
				}}
			/>
			<Route
				path='/donate/wwf'
				component={() => {
					window.location.href = 'https://support.wwf.org.uk/donate-to-wwf';
					return null;
				}}
			/>
			<Route
				path='/contribute/oceans'
				component={() => {
					window.location.href = 'https://4ocean.com/';
					return null;
				}}
			/>
			<Route
				path='/donate/oceans'
				component={() => {
					window.location.href = 'https://4ocean.com/shop-all/';
					return null;
				}}
			/>
		</>
	);
};

function App() {
	const [stateScreen, setStateScreen] = useState({});
	return (
		<BrowserRouter>
			<Theme>
				<AppContainer>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/quiz/person' component={IndividualQuiz} />
						<Route path='/quiz/organization' component={BusinessQuiz} />
						<Route path='/information' component={Information} />
						<Route path='/about' component={About} />
						<Route path='/contribute' component={Contribute} />
						<OutsideLink />
						<Route path='/result' component={Result} />
						<Route component={ErrorPage} />
					</Switch>
				</AppContainer>
			</Theme>
		</BrowserRouter>
	);
}

export default App;
