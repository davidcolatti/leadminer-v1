import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import NotFound from './components/404/NotFound.js';
import NavBar from './components/navbar/NavBar';
import LandingPage from './components/landingpage/LandingPage.js';

import actions from './services/index';

class App extends Component {
	state = {};

	async componentDidMount() {
		let user = await actions.isLoggedIn();

		let masterLeads = await actions.getLeadsFromMaster();
		masterLeads = masterLeads.data;
		this.setState({ ...user.data, masterLeads });
	}

	render() {
		return (
			<BrowserRouter>
				<NavBar />
				<Switch>
					<Route exact path="/" render={(props) => <LandingPage {...props} />} />
					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>
		);
	}
}
export default App;
