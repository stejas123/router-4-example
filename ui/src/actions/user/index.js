import {
	UPDATE_USER_LIFESTAGE_INFO
} from '../action-types';

export function updateUserLifestageInfo(data) {
	return {
		type : UPDATE_USER_LIFESTAGE_INFO,
		week : data.selectedWeek,
		userName: data.userName,
		selectedLifestage: data.selectedLifestage,
		isFetchingUserLifestage : false
	}
}