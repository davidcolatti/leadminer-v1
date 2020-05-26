import React, { Component } from 'react';
import actions from '../../services/index';

class LandingPage extends Component {
	state = {
		leadCount: ''
	};

	async componentDidMount() {
		actions.getLeadsFromMaster().then((res) => {
			this.setState({
				leadCount: res.data.length
			});
		});
	}

	render() {
		return (
			<div>
				<div className="LandingPage">
					<div className="landing-photo">
						<div className="landing-icon">
							<h1 className="landing-quote">
								<strong>LeadMiner</strong>
								<i>" good leads, easy sales "</i>
							</h1>
							<img
								alt="guy icon"
								className="landing-icon-guy"
								src="https://cdn.pixabay.com/photo/2019/09/23/12/36/man-4498454_960_720.png"
							/>
						</div>
						<div className="features">
							<div className="landing-feature">
								<h2>{`${this.state.leadCount} Fresh Leads`}</h2>
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
			</div>
		);
	}
}

export default LandingPage;
