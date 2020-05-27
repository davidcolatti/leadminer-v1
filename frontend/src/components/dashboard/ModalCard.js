import React, { Component } from 'react';
import Loading from '../loading/Loading';
import actions from '../../services';

class CompanyCard extends Component {
	state = {};

	componentDidMount() {
		// if (this.props.user.contactedLeads) {
		// 	let lead = this.props.user.contactedLeads.find((lead) => lead._id === this.props.match.params.id);
		// 	this.setState({
		// 		...lead
		// 	});
		// }
	}

	saveLeadBtn = () => {
		// let lead = this.state;
		// let matchedLead = this.props.user.contactedLeads.find((leadObj) => {
		// 	return leadObj._id === lead._id;
		// });
		// let savedContactedLeads = this.props.user.contactedLeads.map((oneLead) => {
		// 	if (oneLead._id === matchedLead._id) {
		// 		return (oneLead = lead);
		// 	} else {
		// 		return oneLead;
		// 	}
		// });
		// console.log(savedContactedLeads);
		// actions.saveLeads(savedContactedLeads).then((res) => console.log(res));
		// this.props.setUser({
		// 	contactedLeads: savedContactedLeads
		// });
		// this.props.history.push('/dashboard');
	};

	handleChange = (e) => {
		// this.setState({
		// 	[e.target.id]: e.target.value
		// });
	};

	render() {
		return (
			<div className="CompanyCard">
				{this.state ? (
					<form className="company-card-form">
						<fieldset>
							<legend>Company Card</legend>
							<div className="li-container">
								<div className="first-li-div">
									<ul className="company-card-ul">
										<li className="company-card-li">
											<label for="companyname">Company</label>
											<section class="form__controls">
												<input
													onChange={(e) => this.handleChange(e)}
													value={this.state.businessName}
													type="text"
													id="businessName"
													class="form__element"
												/>
											</section>
										</li>
										<li className="company-card-li">
											<label for="firstname">First Name</label>
											<section class="form__controls">
												<input
													onChange={(e) => this.handleChange(e)}
													value={this.state.firstName}
													type="text"
													id="firstName"
													class="form__element"
												/>
											</section>
										</li>
										<li className="company-card-li">
											<label for="lastname">Last Name</label>
											<section class="form__controls">
												<input
													onChange={(e) => this.handleChange(e)}
													value={this.state.lastName}
													type="text"
													id="lastName"
													class="form__element"
												/>
											</section>
										</li>
										<li className="company-card-li">
											<label for="email">Email</label>
											<section class="form__controls">
												<input
													onChange={(e) => this.handleChange(e)}
													value={this.state.email}
													type="email"
													id="email"
													class="form__element"
												/>
											</section>
										</li>
										<li className="company-card-li">
											<label for="phonenumber">Phone Number</label>
											<section class="form__controls">
												<input
													onChange={(e) => this.handleChange(e)}
													value={this.state.phoneNumber}
													type="phone"
													id="phoneNumber"
													class="form__element"
												/>
											</section>
										</li>
									</ul>
								</div>
								<div className="sec-li-div">
									<ul className="company-card-ul">
										<li className="company-card-li">
											<label for="secondphone">Second Phone Number</label>
											<section class="form__controls">
												<input
													onChange={(e) => this.handleChange(e)}
													value={this.state.secondPhoneNumber}
													type="phone"
													id="secondPhoneNumber"
													class="form__element"
												/>
											</section>
										</li>
										<li className="company-card-li">
											<label for="streetaddress">Street</label>
											<section class="form__controls">
												<input
													onChange={(e) => this.handleChange(e)}
													value={this.state.streetAddress}
													type="text"
													id="streetAddress"
													class="form__element"
												/>
											</section>
										</li>
										<li className="company-card-li">
											<label for="city">City</label>
											<section class="form__controls">
												<input
													onChange={(e) => this.handleChange(e)}
													value={this.state.city}
													type="text"
													id="city"
													class="form__element"
												/>
											</section>
										</li>
										<li className="company-card-li">
											<label for="state">State</label>
											<section class="form__controls">
												<input
													onChange={(e) => this.handleChange(e)}
													value={this.state.state}
													type="text"
													id="state"
													class="form__element"
												/>
											</section>
										</li>
										<li className="company-card-li">
											<label for="">Disposition</label>
											<section class="form_controls">
												<select
													id="disposition"
													class="form_element-select"
													onChange={(e) => this.handleChange(e)}
												>
													<option>Prospect</option>
													<option>Contacted</option>
													<option>Appt Set</option>
													<option>Sent Proposal</option>
													<option>Client</option>
												</select>
											</section>
										</li>
									</ul>
								</div>
							</div>
							<div>
								<div className="company-card-notes">
									<label for="notes">Notes</label>
									<section class="form_controls">
										<textarea
											onChange={(e) => this.handleChange(e)}
											value={this.state.notes}
											name=""
											id="notes"
											cols="60"
											rows="3"
											class="form_element"
										/>
									</section>
								</div>
								<div className="company-card-buttons">
									<section class="form_controls action">
										<input
											type="button"
											value="Save"
											class="btn btn-main"
											onClick={() => this.saveLeadBtn()}
										/>
										<button
											class="btn btn-default"
											onClick={() => this.props.history.push('/dashboard')}
										>
											Cancel
										</button>
									</section>
								</div>
							</div>
						</fieldset>
					</form>
				) : (
					<Loading />
				)}
			</div>
		);
	}
}

export default CompanyCard;
