import React, { Component } from 'react';

class Pipeline extends Component {
	displayContactedLeads = () => {
		let contactedLeads = this.props.user.contactedLeads;

		return contactedLeads.map((each) => {
			return (
				<li>
					<div>
						<h4>{each.businessName}</h4>
					</div>
				</li>
			);
		});
	};

	render() {
		return (
			<div className="Pipeline">
				<h3 className="pipeline-title">MY PIPELINE INCLUDES THESE LEADS:</h3>
				<ul>{this.props.user.contactedLeads ? this.displayContactedLeads() : ''}</ul>
			</div>
		);
	}
}

export default Pipeline;
