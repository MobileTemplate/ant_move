//
// Author: leafsoar
// Date: 2017-07-25 18:39:56
// 
import * as types from '../actions/actionTypes';

const initialState = {
	cashback:{
		list: null
	},
	cashbackmonth: null,
	order: {
		list: null
	},
	goodslist:{
		list: null
	},
	lowerchange:{
		list: null
	},
	stream: {
		list: null,
		month: null
	}
};

export default function user(state = initialState, action = {}) {
	switch(action.type) {
	case types.SET_CASHBACK_BYUSER:
		return Object.assign(
			{}, state,
			{cashback: {list: action.data }}
		);
	case types.SET_CASHBACK_MONTH:
		return Object.assign(
			{}, state,
			{cashbackmonth: action.data }
		);
	case types.SET_LOWER_CHANGELIST:
		return Object.assign(
			{}, state,
			{lowerchange: {list: action.data }}
		);
	case types.SET_STREAM_LIST:
	case types.SET_STREAM_MONTH:
		return Object.assign(
			{}, state,
			{stream: action.data}
		);
	case types.SET_CHANGE_GOODS:
		return Object.assign(
			{}, state,
			{goodslist: {list: action.data }}
		);
	default:
		return state;
	}
}