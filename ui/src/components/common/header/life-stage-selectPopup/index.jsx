import React, { Component } from 'react';
import { connect } from 'react-redux';


import  PopupContent from './popup-content';
import { updateUserLifestageInfo } from 'actions/user';

 class LifeStageDropDown extends Component {

 	constructor(props) {
 		super(props);

 		const {
 			userLifestageInfo : {
 				selectedLifestage,
 				week
 			}
 		} = this.props;
 		
 		this.state = {
 			'selectedLifestage': selectedLifestage,
 			'handlePopup': false,
 			'isAuthenticated': true
 		}

 	}

 	// popupToggling for lifeStagePopup
 	togglePopUp = () => {
 		this.setState({'handlePopup': !this.state.handlePopup })
 	}

 	// action for updating LifeStageInfo
 	updateLifeStageData = (data) => {
 		data = {
 			...data,
 			selectedLifestage : this.state.selectedLifestage
 		}
 		this.props.updateUserLifestageInfo(data);
 	}

 	selectLifeStageEvent = (newLifeStage) => {
		this.setState({'selectedLifestage': newLifeStage })
	}

	render = () => {
		const {
			selectedLifestage,
			handlePopup,
			isAuthenticated
		} = this.state;

		return(
			<div>
				<div>
					<span onClick={e => this.togglePopUp() }> {this.props.userLifestageInfo.selectedLifestage} <i></i></span>
					{
						handlePopup &&
						<PopupContent
							userLifestageInfo = { this.props.userLifestageInfo }
							isAuthenticated = { isAuthenticated }
							updateLifeStageData = { this.updateLifeStageData }
							userPersonalInfo = { this.props.userPersonalInfo }
							selectedLifestage = { this.props.userLifestageInfo.selectedLifestage }
							selectLifeStageEvent = { this.selectLifeStageEvent }
						/>
					}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	const {
		userData :{
			userLifestageInfo,
			userPersonalInfo
		}
	} = state;

	return {
		userLifestageInfo,
		userPersonalInfo
	}
}

export default connect(mapStateToProps,{ updateUserLifestageInfo })(LifeStageDropDown);