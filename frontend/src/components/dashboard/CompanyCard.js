import React, { Component } from 'react';
import Loading from '../loading/Loading';

class CompanyCard extends Component {
	state = {
		selectedLead: ''
	};

	componentDidMount() {
		if (this.props.user.contactedLeads) {
			let lead = this.props.user.contactedLeads.find((lead) => lead._id === this.props.match.params.id);
			this.setState({
				selectedLead: lead
			});
		}
	}

	render() {
		return (
			<div className="CompanyCard">
				{this.state.selectedLead ? (
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
													value={this.state.selectedLead.businessName}
													type="text"
													id="companyname"
													class="form__element"
												/>
											</section>
										</li>
										<li className="company-card-li">
											<label for="firstname">First Name</label>
											<section class="form__controls">
												<input
													value={this.state.selectedLead.firstName}
													type="text"
													id="firstname"
													class="form__element"
												/>
											</section>
										</li>
										<li className="company-card-li">
											<label for="lastname">Last Name</label>
											<section class="form__controls">
												<input
													value={this.state.selectedLead.lastName}
													type="text"
													id="lastname"
													class="form__element"
												/>
											</section>
										</li>
										<li className="company-card-li">
											<label for="email">Email</label>
											<section class="form__controls">
												<input
													value={this.state.selectedLead.email}
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
													value={this.state.selectedLead.phoneNumber}
													type="phone"
													id="phonenumber"
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
													value={this.state.selectedLead.secondPhoneNumber}
													type="phone"
													id="secondphone"
													class="form__element"
												/>
											</section>
										</li>
										<li className="company-card-li">
											<label for="streetaddress">Street</label>
											<section class="form__controls">
												<input
													value={this.state.selectedLead.streetAddress}
													type="text"
													id="streetaddress"
													class="form__element"
												/>
											</section>
										</li>
										<li className="company-card-li">
											<label for="city">City</label>
											<section class="form__controls">
												<input
													value={this.state.selectedLead.city}
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
													value={this.state.selectedLead.state}
													type="text"
													id="state"
													class="form__element"
												/>
											</section>
										</li>
										<li className="company-card-li">
											<label for="">Disposition</label>
											<section class="form_controls">
												<select class="form_element-select">
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
											value={this.state.selectedLead.notes}
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
										<input type="submit" value="Save" class="btn btn-main" />
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
