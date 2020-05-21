import React, { Component } from 'react';
import actions from '../../services';

class Dashboard extends Component {
	state = {
		// masterLeads: this.props.user.masterLeads,
		index: 0
	};

	// componentDidMount() {
	// 	this.setState({
	// 		masterLeads: this.props.user.masterLeads
	// 	});
	// }

	nextLead = () => {
		this.setState({
			index: this.state.index + 1
		});
	};

	displayLead = () => {
		let masterLeads = this.props.user.masterLeads;

		return (
			<div className="lead-segment">
				<h3>{masterLeads[this.state.index].businessName}</h3>
				<a href={`tel:${masterLeads[this.state.index].phoneNumber}`}>
					{masterLeads[this.state.index].phoneNumber}
				</a>
				<h4>{`${masterLeads[this.state.index].city}, ${masterLeads[this.state.index].state}`}</h4>
			</div>
		);
	};

	render() {
		console.log(this);
		return (
			<div className="Dashboard">
				<div className="dashboard-content">
					{this.props.user.masterLeads ? this.displayLead() : ''}
					<img
						onClick={this.nextLead}
						alt="right button"
						src="https://i.ya-webdesign.com/images/white-arrow-transparent-png-1.png"
					/>
				</div>
				<div className="dashboard-notes">
					<textarea id="w3mission" rows="10" cols="60">
						At w3schools.com you will learn how to make a website. We offer free tutorials in all web
						development technologies.
					</textarea>
					<div className="dashboard-fields">ADD A FORM</div>
				</div>
			</div>
		);
	}
}

export default Dashboard;
