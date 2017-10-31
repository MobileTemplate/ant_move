//
// Author: leafsoar
// Date: 2017-07-25 18:39:56
// 


import * as types from '../actions/actionTypes';

const initialState = {
	login: {
		user: null,
		test: "test user"
	}
};

export default function user(state = initialState, action = {}) {
	switch(action.type) {
	case types.USER_SET_LOGIN:
		return Object.assign(
			{}, state,
			{login: action.data}
		);
	default:
		return state;
	}
}
