import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import history from '../history/History';
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
			.then((user) => {
				console.log(user);

				this.props.setUser({ ...user.data.user, masterLeads: user.data.masterLeads });

				console.log('got the master leads');
				this.setState({
					loginToggle: !this.state.loginToggle
				});
				console.log(this);

				history.push('/dashboard');
			})
			.catch(({ response }) => console.error(response));
	};

	displayLoginForm = () => {
		return (
			<Fragment>
				<form className="nav-form" action="/dashboard" onSubmit={this.handleLoginSubmit}>
					<input name="email" placeholder="email" type="email" onChange={this.handleChange} />
					<input name="password" placeholder="password" type="password" onChange={this.handleChange} />
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
				this.props.setUser({ ...user.data.user });
				this.setState({
					signUpToggle: !this.state.signUpToggle
				});
			})
			.catch(({ response }) => console.error(response.data));
	};

	displaySignUpForm = () => {
		return (
			<Fragment>
				<form className="nav-form" onSubmit={this.handleSignUpSubmit}>
					<input name="email" type="email" placeholder="email" onChange={this.handleChange} />
					<input name="password" placeholder="password" type="password" onChange={this.handleChange} />
					<input type="submit" value="Sign Up" />
				</form>
			</Fragment>
		);
	};

	logOut = async () => {
		let res = await actions.logOut();
		console.log('logout was called', res);

		this.props.setUser({ email: null, createdAt: null, updatedAt: null, _id: null, masterLeads: null }); //FIX
	};

	render() {
		return (
			<div>
				<span style={{ color: 'red' }}>temporary: {(this.props.email, JSON.stringify(this.props))}</span>

				{this.props.email ? (
					<nav className="NavBar">
						<span className="nav-emblem">
							<img
								className="emblem-img"
								src="https://cdn0.iconfinder.com/data/icons/mining-glyph/100/mining-29-512.png"
								alt="emblem"
							/>
						</span>
						<span className="nav-links">
							<Link to="/dashboard">Dashboard</Link>
							<Link to="/" onClick={this.logOut}>
								Sign Out
							</Link>
						</span>
					</nav>
				) : (
					<nav className="NavBar">
						<span className="nav-emblem">
							<img
								className="emblem-img"
								src="https://cdn0.iconfinder.com/data/icons/mining-glyph/100/mining-29-512.png"
								alt="emblem"
							/>
						</span>

						<span className="nav-links">
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
						</span>
					</nav>
				)}
			</div>
		);
	}
}

export default NavBar;
