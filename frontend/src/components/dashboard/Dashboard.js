import React, { Component } from 'react';
import actions from '../../services';

class Dashboard extends Component {
	addFreshLeads = () => {
		let freshLeads = this.props.user.freshLeads;

		freshLeads.push(this.props.user.masterLeads[0]);
		console.log(freshLeads);
	};

	displayFreshLeads = () => {
		let freshLeads = this.props.user.freshLeads;

		return freshLeads.map((each) => {
			return <li>{each.businessName}</li>;
		});
	};

	render() {
		return (
			<div>
				{this.props.user.email ? (
					<div className="Dashboard">
						<button onClick={this.addFreshLeads}>Add Fresh Leads</button>
						<ul>{this.displayFreshLeads}</ul>
					</div>
				) : (
					this.props.history.push('/')
				)}
			</div>
		);
	}
}

export default Dashboard;
