import React, { Component } from 'react';

class Pipeline extends Component {
	displayContactedLeads = () => {
		let contactedLeads = this.props.user.contactedLeads;

		return contactedLeads.map((each) => {
			return (
				<li key={each._id}>
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
				<div className="pipeline-prospects">
					<div>
						<h3 className="pipeline-title">Prospects:</h3>
						<ul className="pipeline-list">
							{this.props.user.contactedLeads ? this.displayContactedLeads() : ''}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Pipeline;
