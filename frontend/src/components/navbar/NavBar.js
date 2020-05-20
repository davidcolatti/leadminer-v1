import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import actions from '../../services/index';

class NavBar extends Component {
	state = {
		loginToggle: true,
		signUpToggle: true
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleLoginSubmit = (e) => {
		e.preventDefault();

		let data = {
			email: this.state.email,
			password: this.state.password
		};

		actions
			.logIn(data)
			.then(async (user) => {
				let masterLeads = await actions.getLeadsFromMaster();
				masterLeads = masterLeads.data;

				this.props.setUser({ ...user.data, masterLeads });
				console.log('got the master leads');
				this.setState({
					loginToggle: !this.state.loginToggle
				});
			})
			.catch(({ response }) => console.error(response));
	};

	displayLoginForm = () => {
		return (
			<Fragment>
				<form action="/dashboard" onSubmit={this.handleLoginSubmit}>
					<input name="email" type="email" onChange={this.handleChange} />
					<input name="password" type="password" onChange={this.handleChange} />
					<input type="submit" value="Log In" />
				</form>
			</Fragment>
		);
	};

	handleSignUpSubmit = (e) => {
		e.preventDefault();

		actions
			.signUp(this.state)
			.then((user) => {
				this.props.setUser({ ...user.data });
				this.setState({
					signUpToggle: !this.state.signUpToggle
				});
			})
			.catch(({ response }) => console.error(response.data));
	};

	displaySignUpForm = () => {
		return (
			<Fragment>
				<form onSubmit={this.handleSignUpSubmit}>
					<input name="email" type="email" onChange={this.handleChange} />
					<input name="password" type="password" onChange={this.handleChange} />
					<input type="submit" value="Sign Up" />
				</form>
			</Fragment>
		);
	};

	logOut = async () => {
		let res = await actions.logOut();
		this.props.setUser({ email: null, createdAt: null, updatedAt: null, _id: null }); //FIX
	};

	render() {
		return (
			<div>
				{this.props.email ? (
					<nav className="NavBar">
						<span>
							<img src="" alt="emblem" />
						</span>

						<Link to="/dashboard">Dashboard</Link>
						<Link to="/" onClick={this.logOut}>
							Sign Out
						</Link>
					</nav>
				) : (
					<nav className="NavBar">
						<span>
							<img src="" alt="emblem" />
						</span>

						{this.state.loginToggle ? (
							<Link onClick={() => this.setState({ loginToggle: !this.state.loginToggle })} to="/">
								Login
							</Link>
						) : (
							this.displayLoginForm()
						)}

						{this.state.signUpToggle ? (
							<Link onClick={() => this.setState({ signUpToggle: !this.state.signUpToggle })} to="/">
								Sign Up
							</Link>
						) : (
							this.displaySignUpForm()
						)}
					</nav>
				)}
			</div>
		);
	}
}

export default NavBar;
