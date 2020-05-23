import React, { Component, Fragment } from 'react';
import Loading from '../loading/Loading';
import actions from '../../services/index';

class Prospecting extends Component {
	state = {
		index: 0
	};

	addLeadToDash = (lead) => {
		let matchingleads = this.props.user.contactedLeads.find((cLeads) => {
			return cLeads._id === lead._id;
		});

		if (!matchingleads) {
			let contactedLeads = this.props.user.contactedLeads;
			contactedLeads.push(lead);

			actions.addLeadToContactedArray(contactedLeads).then((res) => console.log(res));

			console.log(`i added ${lead.businessName} to my contacted leads array`);
		} else {
			console.log('this lead exists');
		}
	};

	displayLead = () => {
		let masterLeads = this.props.user.masterLeads;

		return Array.from({ length: 20 }, (_, i) => {
			return (
				<Fragment>
					<tr className="prospecting-company-row">
						<td>{masterLeads[this.state.index + i].businessName}</td>
						<td>{masterLeads[this.state.index + i].category[0]}</td>
						<td>{masterLeads[this.state.index + i].city}</td>
						<td>{masterLeads[this.state.index + i].state}</td>
						<td>
							<img
								className="addDashBtn"
								src="https://www.iconsdb.com/icons/preview/white/plus-4-xxl.png"
								onClick={() => this.addLeadToDash(masterLeads[this.state.index + i])}
							/>
						</td>
					</tr>
				</Fragment>
			);
		});
	};

	displayTable = () => {
		return (
			<div>
				<div class="tbl-header">
					<table cellpadding="0" cellspacing="0" border="0">
						<thead>
							<tr>
								<th>Company</th>
								<th>Category</th>
								<th>City</th>
								<th>State</th>
								<th>Add To Dashboard</th>
							</tr>
						</thead>
					</table>
				</div>
				<div class="tbl-content">
					<table cellpadding="0" cellspacing="0" border="0">
						<tbody>{this.props.user.masterLeads ? this.displayLead() : <Loading />}</tbody>
					</table>
				</div>
			</div>
		);
	};

	render() {
		return (
			<div className="Prospecting">
				<div className="pipeline-prospects">{this.displayTable()}</div>
			</div>
		);
	}
}

export default Prospecting;
