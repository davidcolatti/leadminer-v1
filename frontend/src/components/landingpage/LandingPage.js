import React, { Component } from 'react';

class LandingPage extends Component {
	render() {
		return (
			<div>
				{this.props.email ? (
					this.props.history.push('/dashboard')
				) : (
					<div className="LandingPage">
						<div className="landing-photo">
							<strong>LeadMiner</strong>
						</div>
						<div className="features">
							<div className="landing-feature">
								<h2>Fresh Leads</h2>
								<p>
									Our software is created to mine small business information that is brand new, with
									little to no web-presence.
								</p>
							</div>
							<div className="landing-feature">
								<h2>Close Deals</h2>
								<p>
									Our software is created to mine small business information that is brand new, with
									little to no web-presence.
								</p>
							</div>
							<div className="landing-feature">
								<h2>Retain Clients</h2>
								<p>
									Our software is created to mine small business information that is brand new, with
									little to no web-presence.
								</p>
							</div>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default LandingPage;
