import {
	UPDATE_USER_LIFESTAGE_INFO
} from 'actions/action-types';

const INITIAL_STATE = {
	'userPersonalInfo': {
		'userName': 'Tejas Sathe'
	},
	'userLifestageInfo': {
		'selectedLifestage' : 'Expecting A Baby',
		'week' : 5
	},
	'isFetchingUserLogin': false,
	'isFetchingUserLifestage': false,
	'UserUpdateRequest': false
}


export default function userData(state=INITIAL_STATE, action) {
	switch(action.type) {

		case UPDATE_USER_LIFESTAGE_INFO:
		return {
			...state,
			userLifestageInfo: {
				...state.userLifestageInfo,
				week: action.week,
				selectedLifestage: action.selectedLifestage
			},
			userPersonalInfo : {
				...state.userPersonalInfo,
				userName: action.userName
			},
			isFetchingUserLifestage : action.isFetchingUserLifestage
		}

		default:
		return state;
	}
}