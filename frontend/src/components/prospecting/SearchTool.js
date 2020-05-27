import React, { Component, Fragment } from 'react';
import Loading from '../loading/Loading';

import actions from '../../services/index';

class SearchTool extends Component {
	state = {
		index: 0,
		searchTerm: '',
		searchType: 'businessName'
	};

	handleInput = (e) => {
		this.setState({
			searchTerm: e.target.value.toLowerCase()
		});
	};

	handleRadioChange = (e) => {
		this.setState({
			searchType: e.target.value
		});
	};

	saveLeadBtn = () => {
		// POST TO BACKEND
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
		let searchType = this.state.searchType;

		if (this.state.searchTerm.length !== 0) {
			let masterLeads = [ ...this.props.user.masterLeads ].filter((leadObj) => {
				if (searchType === 'category') {
					return leadObj[searchType].find((category) =>
						category.toLowerCase().includes(this.state.searchTerm)
					);
				} else {
					return leadObj[searchType].toLowerCase().includes(this.state.searchTerm);
				}
			});

			return Array.from({ length: masterLeads.length || 0 }, (_, i) => {
				return (
					<Fragment>
						<tr className="prospecting-company-row">
							<td>{masterLeads[this.state.index + i].businessName}</td>
							<td>{masterLeads[this.state.index + i].category[0]}</td>
							<td>{masterLeads[this.state.index + i].city}</td>
							<td>{masterLeads[this.state.index + i].state}</td>
							<td>
								<img
									alt="white add"
									className="addDashBtn"
									src="https://www.iconsdb.com/icons/preview/white/plus-4-xxl.png"
									onClick={() => this.addLeadToDash(masterLeads[this.state.index + i])}
								/>
							</td>
						</tr>
					</Fragment>
				);
			});
		}
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
				<div class="container">
					<div className="container-radio">
						<span>
							<input
								type="radio"
								id="businessName"
								name="search"
								value="businessName"
								defaultChecked
								onChange={(e) => this.handleRadioChange(e)}
							/>
							<label for="businessName">Company</label>
						</span>
						<span>
							<input
								onChange={(e) => this.handleRadioChange(e)}
								type="radio"
								id="category"
								name="search"
								value="category"
							/>
							<label for="female">Category</label>
						</span>
						<span>
							<input
								onChange={(e) => this.handleRadioChange(e)}
								type="radio"
								id="city"
								name="search"
								value="city"
							/>
							<label for="other">City</label>
						</span>
						<span>
							<input
								onChange={(e) => this.handleRadioChange(e)}
								type="radio"
								id="state"
								name="search"
								value="state"
							/>
							<label for="other">State</label>
						</span>
					</div>

					<input
						id="searchBar"
						onChange={this.handleInput}
						class="searchbar"
						type="text"
						autocomplete="off"
						placeholder="Search..."
					/>
				</div>
				<div className="pipeline-prospects">{this.displayTable()}</div>
			</div>
		);
	}
}

export default SearchTool;
