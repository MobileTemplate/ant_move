//
// Author: leafsoar
// Date: 2017-07-25 18:39:56
// 
import * as types from '../actions/actionTypes';

const initialState = {
	list: null,
	info: null,
	data_info: null,
	wdraw: {
		list: null
	},

	min:null,
	transfer:null,
	winning:null
};

export default function Message(state = initialState, action = {}) {
	switch(action.type) {
	case types.SET_MESSAGE_INFO:
		return Object.assign(
			{}, state,
			{list: action.data}
		);
	case types.SET_MESSAGE:
		return Object.assign(
			{}, state,
			{info: action.data}
		);
	case types.SET_MESSAGE_DATE_INFO:
		return Object.assign(
			{}, state,
			{data_info: action.data}
		);
	case types.USER_SET_MINCASHBACK:
		return Object.assign(
			{}, state,
			{min: action.data}
		);
	case types.USER_WITHDRAW_LIST:
		return Object.assign(
			{}, state,
			{wdraw: {list: action.data }}
		);
	case types.WEIXIN_TRANSFERSQUERY:
		return Object.assign(
			{}, state,
			{transfer: action.data}
		);
	case types.GET_WINNING:
		return Object.assign(
			{}, state,
			{winning: action.data}
		);
	default:
		return state;
	}
}
