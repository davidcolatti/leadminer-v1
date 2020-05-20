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
			<div>
				<h3>{masterLeads[this.state.index].businessName}</h3>
				<a href={`tel:${masterLeads[this.state.index].phoneNumber}`}>
					{masterLeads[this.state.index].phoneNumber}
				</a>
				<h4>{`${masterLeads[this.state.index].city}, ${masterLeads[this.state.index].state}`}</h4>
			</div>
		);
	};

	render() {
		return (
			<div>
				{this.props.user.email ? (
					<div className="Dashboard">
						<button onClick={this.nextLead}>Next Lead</button>
						{this.props.user.masterLeads ? this.displayLead() : ''}
					</div>
				) : (
					this.props.history.push('/')
				)}
			</div>
		);
	}
}

export default Dashboard;
