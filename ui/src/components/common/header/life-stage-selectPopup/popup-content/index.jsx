import React, { Component } from 'react';
import DatePicker from'react-dropdowns-datepicker';
import ExpectingBaby from './expecting-option';

export default class LifestagePopup extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			'date' : null,
			'week' : this.props.userLifestageInfo.week,
			'userName': this.props.userPersonalInfo.userName
		}
	}

	onDateChange = (date) => {
		this.setState({date})
	}


	render = () =>  (
		<div>
			<div>
				<div>
				<span onClick={e=> this.props.selectLifeStageEvent('Expecting A Baby')}>
					expecting a baby <i > tick </i>
				</span>
				<span onClick={e=> this.props.selectLifeStageEvent('Already A Parent')}>
					Already a parent <i> tick </i>
				</span>
				</div>
				{
					this.props.isAuthenticated && this.props.selectedLifestage === 'Already A Parent' ?
					<div>
						<DatePicker dateChange={ e => this.onDateChange() } />
					</div>
					:
						<ExpectingBaby
						selectedLifestage = {this.props.selectedLifestage }
						selectedWeek = { this.state.week }
						updateLifeStageData = { this.props.updateLifeStageData }
						userName = { this.state.userName }
						/>
				}
			</div>
		</div>
	)
}