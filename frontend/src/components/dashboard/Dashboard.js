import React, { Component, Fragment } from 'react';
import CompanyDetails from './CompanyDetails';
import actions from '../../services';

class Dashboard extends Component {
	state = {
		index: 0
	};

	nextLead = () => {
		this.setState({
			index: this.state.index + 1
		});
	};

	displayLead = () => {
		let masterLeads = this.props.user.masterLeads;
		return Array.from({ length: 3 }, (_, i) => {
			return (
				<div
					key={i}
					className="lead-segment"
					onClick={() =>
						this.setState(
							{
								selectedLead: masterLeads[this.state.index + i]
							},
							() => console.log(this.state)
						)}
				>
					<h3>{masterLeads[this.state.index + i].businessName}</h3>
				</div>
			);
		});
	};

	render() {
		return (
			<div className="Dashboard">
				<div className="dashboard-content">
					{this.props.user.masterLeads ? this.displayLead() : ''}
					<div className="dashboard-button">
						<img
							onClick={this.nextLead}
							alt="right button"
							src="https://i.ya-webdesign.com/images/white-arrow-transparent-png-1.png"
						/>
					</div>
				</div>
				<CompanyDetails selectedLead={this.state.selectedLead} user={this.props.user} />
			</div>
		);
	}
}

export default Dashboard;
