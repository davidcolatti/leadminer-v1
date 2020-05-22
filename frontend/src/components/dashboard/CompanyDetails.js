import React, { Component } from 'react';
import actions from '../../services/index';

class CompanyDetails extends Component {
	addLeadToContactedArray = async () => {
		let contactedLead = this.props.user.contactedLeads;

		if (contactedLead.includes(this.props.selectedLead)) {
			console.log('this lead exists');
		} else {
			contactedLead.push(this.props.selectedLead);

			actions.addLeadToContactedArray(contactedLead).then((res) => console.log(res));

			console.log(`i added ${this.props.selectedLead.businessName} to my contacted leads array`);
		}
	};

	render() {
		return (
			<div className="CompanyDetail">
				{this.props.selectedLead ? (
					<div className="selected-company">
						<div className="selected-content">
							<h3>{this.props.selectedLead.businessName}</h3>
							<a href={`tel:${this.props.selectedLead.phoneNumber}`}>
								{this.props.selectedLead.phoneNumber}
							</a>
							<h4>{`${this.props.selectedLead.city}, ${this.props.selectedLead.state}`}</h4>
						</div>
						<button className="selected-button" onClick={this.addLeadToContactedArray}>
							+
						</button>
					</div>
				) : (
					'NO LEAD SELECTED'
				)}
			</div>
		);
	}
}

export default CompanyDetails;
