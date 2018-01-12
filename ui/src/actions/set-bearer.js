import { setBearer, unsetBearer } from 'utils/bearer.js';

// Import types
import {
 BEARER_SET,
 BEARER_UNSET,
} from './action-types';

// Auth bearer succesfully set
function bearerSet() {
 return {
   'type': BEARER_SET,
   'isSet': true
 };
}

// Auth bearer successfully unset
function bearerUnset() {
 return {
   'type': BEARER_UNSET,
   'isUnset': true
 };
}


// Set header of APi request globally
export function setAuthBearer(cookieName) {

  // if(window.location.origin !== "http://localhost:3000") {
  setBearer();

  return dispatch => {

    dispatch(bearerSet(cookieName));
  };
 // } else {
 //   return dispatch => {

 //   }
 // }
}

// Unset header of API request globally
export function unsetAuthBearer(cookieName) {

 unsetBearer(cookieName);

 return dispatch => {

   dispatch(bearerUnset(cookieName));
 };
}
