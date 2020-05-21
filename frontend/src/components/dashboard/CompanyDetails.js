import React, { Component } from 'react';

class CompanyDetails extends Component {
	render() {
		return (
			<div className="CompanyDetail">
				{this.props.selectedLead ? (
					<div className="selected-company">
						<h3>{this.props.selectedLead.businessName}</h3>
						<a href={`tel:${this.props.selectedLead.phoneNumber}`}>{this.props.selectedLead.phoneNumber}</a>
						<h4>{`${this.props.selectedLead.city}, ${this.props.selectedLead.state}`}</h4>{' '}
					</div>
				) : (
					'NO LEAD SELECTED'
				)}
			</div>
		);
	}
}

export default CompanyDetails;
