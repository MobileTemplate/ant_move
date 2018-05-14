//
// Author: leafsoar
// Date: 2017-07-25 18:39:56
// 


import * as types from '../actions/actionTypes';

const initialState = {
	json: null,
	token: null,
	single: null,
	level_user_info: null
};
export default function user(state = initialState, action = {}) {
	switch(action.type) {
	case types.USER.SET_JSON:
		return Object.assign(
			{}, state,
			{json: action.data }
		);
	case types.USER.USET_SET_TOKEN:
		return Object.assign(
			{}, state,
			{token: action.data }
		);
	case types.USER.USER_SET_SINGLE:
		return Object.assign(
			{}, state,
			{single: action.data}
		);
	case types.USER.SET_LEVELUSER_INFO:
		return Object.assign(
			{}, state,
			{level_user_info: action.data}
		);
	default:
		return state;
	}
}