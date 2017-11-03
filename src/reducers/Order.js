//
// Author: leafsoar
// Date: 2017-07-25 18:39:56
// 
import * as types from '../actions/actionTypes';

const initialState = {
	lowerorder: {
		list: null
	},
	orderlist:{
		list: null
	},
	operas:{
		list: null
	},
	firstorder:{
		list: null
	},
	orderinfos:{
		list: null
	},
	streamday: null,
	set_per: null,
	set_per_details: null,
	opera_perfrom: null,
};
// 
export default function user(state = initialState, action = {}) {
	switch(action.type) {
	case types.SET_LOWER_ORDERSTATIS:
		return Object.assign(
			{}, state,
			{lowerorder: {list: action.data }}
		);
	case types.SET_QUERYORDER_INFO:
		return Object.assign(
			{}, state,
			{orderlist: {list: action.data }}
		);
	case types.SET_ORDERQUERY_INFO:
		return Object.assign(
			{}, state,
			{orderinfos: {list: action.data }}
		);
	case types.SET_OPERA_PERFORM:
		return Object.assign(
			{}, state,
			{opera_perfrom: action.data}
		);
	case types.SET_OPERA_CASHBACK:
		return Object.assign(
			{}, state,
			{operas: {list: action.data }}
		);
	case types.SET_RIRSTLOWER_ORDER:
		return Object.assign(
			{}, state,
			{firstorder: {list: action.data }}
		);
	case types.SET_PER_DAY_ORDER_DETAILS:
		return Object.assign(
			{}, state,
			{set_per_details: action.data}
		);
	case types.SET_PER_DAY_ORDER:
		return Object.assign(
			{}, state,
			{set_per: action.data}
		);
	case types.SET_STREAM_DAY:
		return Object.assign(
			{}, state,
			{streamday: action.data }
		);
	default:
		return state;
	}
}
