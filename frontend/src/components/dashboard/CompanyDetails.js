import React, { Component } from 'react';

class CompanyDetails extends Component {
	addLeadToContactedArray = () => {
		let contactedLead = this.props.user.contactedLeads;

		if (contactedLead.includes(this.props.selectedLead)) {
			console.log('this lead exists');
		} else {
			contactedLead.push(this.props.selectedLead);

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

						<div className="selected-button" onClick={this.addLeadToContactedArray}>
							<img src="https://lh3.googleusercontent.com/proxy/NUpptkz5KvUER7y8nMLkAdJDcO3UlDUbk4oUm0KqV0x-XbwSvPKggmExkQGE7UcudzYMWeEJ85dPztTNkMjhsJKFi2ZxNjStdaSXhq4ioyjLCemTlHuxysC2A6vk" />
						</div>
					</div>
				) : (
					'NO LEAD SELECTED'
				)}
			</div>
		);
	}
}

export default CompanyDetails;
