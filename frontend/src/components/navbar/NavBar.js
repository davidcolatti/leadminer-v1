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

		actions
			.logIn(this.state)
			.then((user) => {
				this.props.setUser({ ...user.data });
			})
			.catch(({ response }) => console.error(response.data));
	};

	displayLoginForm = () => {
		return (
			<Fragment>
				<form onSubmit={this.handleLoginSubmit}>
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

	render() {
		return (
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
		);
	}
}

export default NavBar;
