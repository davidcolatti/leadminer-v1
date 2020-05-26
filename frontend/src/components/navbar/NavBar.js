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
				this.props.setUser({ ...user.data.user, masterLeads: user.data.masterLeads });

				console.log('got the master leads');
				this.setState({
					loginToggle: !this.state.loginToggle
				});

				history.push('/dashboard');
			})
			.catch(({ response }) => console.error(response));
	};

	displayLoginForm = () => {
		return (
			<Fragment>
				<form className="nav-form" action="/dashboard" onSubmit={this.handleLoginSubmit}>
					<input
						value={this.state.email}
						name="email"
						placeholder="email"
						type="email"
						onChange={this.handleChange}
					/>
					<input
						value={this.state.password}
						name="password"
						placeholder="password"
						type="password"
						onChange={this.handleChange}
					/>
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
				console.log(user);

				this.props.setUser({ ...user.data.user, masterLeads: user.data.masterLeads });

				console.log('got the master leads from signup');
				this.setState({
					signUpToggle: !this.state.signUpToggle
				});

				history.push('/dashboard');
			})
			.catch(({ response }) => console.error(response.data));
	};

	displaySignUpForm = () => {
		return (
			<Fragment>
				<form className="nav-form" onSubmit={this.handleSignUpSubmit}>
					<input
						value={this.state.email}
						name="email"
						type="email"
						placeholder="email"
						onChange={this.handleChange}
					/>
					<input
						value={this.state.password}
						name="password"
						placeholder="password"
						type="password"
						onChange={this.handleChange}
					/>
					<input type="submit" value="Sign Up" />
				</form>
			</Fragment>
		);
	};

	displayJoinNow = () => {
		return (
			<span className="nav-links">
				<span className="dropdown">
					<Link to="/">
						Join Now !<i class="arrow down" />
					</Link>
					<span className="dropdown-content-join">
						<ul>
							<li>
								<Link
									to="/"
									onClick={() =>
										this.setState({
											loginToggle: !this.state.loginToggle,
											signUpToggle: true
										})}
								>
									Login
								</Link>
							</li>
							<li>
								<Link
									to="/"
									onClick={() =>
										this.setState({
											signUpToggle: false,
											loginToggle: true
										})}
								>
									Sign Up
								</Link>
							</li>
						</ul>
					</span>
				</span>
			</span>
		);
	};

	logOut = async () => {
		let res = await actions.logOut();
		console.log('logout was called', res);

		this.props.setUser({ email: null, createdAt: null, updatedAt: null, _id: null, masterLeads: null });

		this.setState({ email: '', password: '' });

		history.push('/');
	};

	render() {
		return (
			<div>
				{/* <span style={{ color: 'red' }}>temporary: {(this.props.email, JSON.stringify(this.props))}</span> */}

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
							<span className="dropdown">
								<Link to="/prospecting">
									Prospecting<i class="arrow down" />
								</Link>
								<span className="dropdown-content">
									<ul>
										<li>
											<Link to="/prospecting">Random Leads</Link>
										</li>
										<li>
											<Link to="/prospecting/search-tool">Custom Search Tool</Link>
										</li>
									</ul>
								</span>
							</span>
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

						{this.state.loginToggle ? '' : this.displayLoginForm()}

						{this.state.signUpToggle ? '' : this.displaySignUpForm()}

						{this.displayJoinNow()}
					</nav>
				)}
			</div>
		);
	}
}

export default NavBar;
