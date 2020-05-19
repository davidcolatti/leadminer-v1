import React, { Component } from 'react';

class Profile extends Component {
	displayLeads = () => {
		let list = this.props.user.masterLeads.slice(0, 10);

		return list.map((each) => {
			return <li>{each.businessName}</li>;
		});

		this.setState({});
	};

	render() {
		if (!this.props.user.email) {
			this.props.history.push('/log-in');
		}

		return (
			<div>
				<div>Profile Welcome {this.props.user.email} !!!</div>
				<ul>{this.displayLeads()}</ul>
			</div>
		);
	}
}

export default Profile;
