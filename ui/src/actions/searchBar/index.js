import axios from 'axios';


import { 
	API_URL,
	REQ_TIMEOUT,
	NETWORK_FAILURE_MSG
}  from 'common/constants';

import { timeout } from 'src/utils/dom-query';


export const getSelectedCityData = (cityName) => {
	return dispatch => {
		dispatch(eventDataRequest());

		return timeout( REQ_TIMEOUT, axios.get(`${API_URL}/${cityName}`).then(
			if(response.status === 200) {

			}
		)

	}
}

export const getSearchResults = (API_URL,)