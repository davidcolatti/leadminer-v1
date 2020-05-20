import React, { Component } from 'react';
import actions from '../../services';

class Dashboard extends Component {
	state = {
		masterLeads: this.props.user.masterLeads,
		index: 0
	};

	componentDidMount() {
		this.setState({
			masterLeads: this.props.user.masterLeads
		});
	}

	nextLead = () => {
		this.setState({
			index: this.state.index + 1
		});
	};

	displayLead = () => {
		return (
			<li>
				<div>
					<h3>{this.state.masterLeads[this.state.index].businessName}</h3>
					<a href={`tel:${this.state.masterLeads[this.state.index].phoneNumber}`}>
						{this.state.masterLeads[this.state.index].phoneNumber}
					</a>
					<h4>{`${this.state.masterLeads[this.state.index].city}, ${this.state.masterLeads[this.state.index]
						.state}`}</h4>
				</div>
			</li>
		);
	};

	render() {
		return (
			<div>
				{this.props.user.email ? (
					<div className="Dashboard">
						<button onClick={this.nextLead}>Next Lead</button>
						{/* <ul>{this.displayLead()}</ul> */}
					</div>
				) : (
					this.props.history.push('/')
				)}
			</div>
		);
	}
}

export default Dashboard;
