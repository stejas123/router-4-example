import axios from 'axios';
import { getCookie } from './cookie';

import {
	AUTHENTICATION_INFO,
	X_CSRF_TOKEN
} from 'common/constants';

/**
* [function to set bearer for http requests]
* @param  {[string]} cookieName [pass name of the cookie]
*/
export const setBearer = (cookieName) => {
	axios.defaults.headers.common = {
  	'Authorization': getCookie(AUTHENTICATION_INFO) ?
      `Basic ${JSON.parse(getCookie(AUTHENTICATION_INFO)).token}` :
      '',
   	'X-CSRF-TOKEN': getCookie(X_CSRF_TOKEN) ?
      `${JSON.parse(getCookie(X_CSRF_TOKEN)).xCsrfToken}` :
      ''
	}
};

/**
* [function to set bearer for http requests]
* @param  {[string]} cookieName [pass name of the cookie]
*/
export const unsetBearer = (cookieName) => {
  if(cookieName === AUTHENTICATION_INFO) {
    delete axios.defaults.headers.common['Authorization'] ;
  } else if(cookieName === X_CSRF_TOKEN) {
    delete axios.defaults.headers.common['X-CSRF-TOKEN'];
  }
};
