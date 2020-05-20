import React, { Component } from 'react';

class LandingPage extends Component {
	render() {
		return (
			<div>
				{this.props.email ? (
					this.props.history.push('/dashboard')
				) : (
					<div className="LandingPage">
						LANDING PHOTO
						<div className="landing-photo">
							<div className="landing-feature">Feature</div>
							<div className="landing-feature">Feature</div>
							<div className="landing-feature">Feature</div>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default LandingPage;
