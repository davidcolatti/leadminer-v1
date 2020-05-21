import React, { Component, Fragment } from 'react';
import { Router, Switch, Route, Link } from 'react-router-dom';
import NotFound from './components/404/NotFound.js';
import NavBar from './components/navbar/NavBar';
import LandingPage from './components/landingpage/LandingPage.js';
import Dashboard from './components/dashboard/Dashboard';
import Pipeline from './components/pipeline/Pipeline';

import history from './components/history/History';
import actions from './services/index';

class App extends Component {
	state = {};

	async componentDidMount() {
		actions
			.isLoggedIn()
			.then((user) => {
				console.log(user.data);

				this.setUser({ ...user.data.user, masterLeads: user.data.masterLeads });

				console.log('got the master leads');
				this.setState({
					loginToggle: !this.state.loginToggle
				});
			})
			.catch(({ response }) => console.error(response));
	}

	setUser = (user) => {
		console.log('set user called', user);
		if (user._id)
			this.setState({
				...user
			});
		else history.push('/');
	};

	render() {
		return (
			<Router history={history}>
				<NavBar setUser={this.setUser} email={this.state.email} />
				<Switch>
					<Route exact path="/" render={(props) => <LandingPage {...props} email={this.state.email} />} />
					<Route exact path="/dashboard" render={(props) => <Dashboard {...props} user={this.state} />} />
					<Route exact path="/pipeline" render={(props) => <Pipeline {...props} user={this.state} />} />
					<Route component={NotFound} />
				</Switch>
			</Router>
		);
	}
}
export default App;
