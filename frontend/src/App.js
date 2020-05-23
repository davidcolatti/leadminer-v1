import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import NotFound from './components/404/NotFound.js';
import NavBar from './components/navbar/NavBar';
import LandingPage from './components/landingpage/LandingPage.js';
import Dashboard from './components/dashboard/Dashboard';
import Prospecting from './components/prospecting/Prospecting';
import SearchTool from './components/prospecting/SearchTool';

import history from './components/history/History';
import actions from './services/index';

class App extends Component {
	state = {};

	async componentDidMount() {
		actions
			.isLoggedIn()
			.then((user) => {
				this.setUser({ ...user.data.user, masterLeads: user.data.masterLeads });

				this.setState({
					loginToggle: !this.state.loginToggle
				});
			})
			.catch(({ response }) => console.error(response));
	}

	setUser = (user) => {
		console.log(user);

		this.setState({
			...user
		});
	};

	render() {
		return (
			<Router history={history}>
				<NavBar setUser={this.setUser} email={this.state.email} />
				<Switch>
					<Route exact path="/" render={(props) => <LandingPage {...props} email={this.state.email} />} />
					<Route exact path="/dashboard" render={(props) => <Dashboard {...props} user={this.state} />} />
					<Route exact path="/prospecting" render={(props) => <Prospecting {...props} user={this.state} />} />
					<Route
						exact
						path="/prospecting/search-tool"
						render={(props) => <SearchTool {...props} user={this.state} />}
					/>
					<Route component={NotFound} />
				</Switch>
			</Router>
		);
	}
}
export default App;
