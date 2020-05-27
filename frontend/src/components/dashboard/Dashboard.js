import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import actions from '../../services';
import Loading from '../loading/Loading';
import Popup from 'reactjs-popup';
import ModalCard from './ModalCard';

class Dashboard extends Component {
	state = {
		index: 0
	};

	deleteFromContactedLeads = (index) => {
		let contactedLeads = this.props.user.contactedLeads;
		contactedLeads.splice(index, 1);

		actions
			.deleteLeadFromContactedLeadsArray(contactedLeads)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));

		this.props.setUser({
			...this.props.user
		});
	};

	displayLead = () => {
		let contactedLeads = this.props.user.contactedLeads;

		return Array.from({ length: contactedLeads.length }, (_, i) => {
			return (
				<Fragment>
					<tr className="dash-company-row">
						<td>
							<Link
								className="dash-company-name"
								to={`/dashboard/${contactedLeads[this.state.index + i]._id}`}
							>
								{contactedLeads[this.state.index + i].businessName}
							</Link>
						</td>
						<td>{contactedLeads[this.state.index + i].category[0]}</td>
						<td>
							<a className="dash-tel" href={`tel:${contactedLeads[this.state.index + i].phoneNumber}`}>
								{contactedLeads[this.state.index + i].phoneNumber}
							</a>
						</td>
						<td>{contactedLeads[this.state.index + i].city}</td>
						<td>{contactedLeads[this.state.index + i].state}</td>
						<td>{contactedLeads[this.state.index + i].disposition}</td>
						<td>
							<img
								alt="white delete"
								src="https://www.iconsdb.com/icons/preview/white/trash-2-xxl.png"
								className="deleteBtn"
								onClick={() => this.deleteFromContactedLeads(this.state.index + i)}
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
				<div className="tbl-header">
					<table cellPadding="0" cellSpacing="0" border="0">
						<thead>
							<tr>
								<th>Company</th>
								<th>Category</th>
								<th>Phone</th>
								<th>City</th>
								<th>State</th>
								<th>Disposition</th>
								<th>Delete</th>
							</tr>
						</thead>
					</table>
				</div>
				<div className="tbl-content">
					<table cellPadding="0" cellSpacing="0" border="0">
						<tbody>{this.props.user.masterLeads ? this.displayLead() : <Loading />}</tbody>
					</table>
				</div>
			</div>
		);
	};

	render() {
		return (
			<div className="Dashboard">
				<Popup modal trigger={<button>Click Me</button>}>
					{(close) => <ModalCard close={close} />}
				</Popup>
				<div className="dashboard-content">{this.displayTable()}</div>
			</div>
		);
	}
}

export default Dashboard;
