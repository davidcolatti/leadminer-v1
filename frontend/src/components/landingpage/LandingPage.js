import React, { Component } from 'react';

class LandingPage extends Component {
	render() {
		return (
			<div>
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
								With having a consistent pipeline of new leads coming in, you'll find yourself
								generating more revenue and closing more deals!
							</p>
						</div>
						<div className="landing-feature">
							<h2>Retain Clients</h2>
							<p>
								LeadMiner will let you become more organized with your workload and let you increase
								client retention by keeping notes and following up to client requests.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default LandingPage;
