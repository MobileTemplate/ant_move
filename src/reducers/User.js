//
// Author: leafsoar
// Date: 2017-07-25 18:39:56
// 


import * as types from '../actions/actionTypes';

const initialState = {

	login: {
		user: null,
		token: null
	},
	token: null,
	loweruser: {
		list: null,
		level_list: null
	},

	single: null,
	vipback: {
		list: null
	},
	direct: [],
	json: null,
	userdl:null,
	uniqueness: null,
	agentdetails:null,
	opera:null,
	operalist:null,
	oper:null,
	mails: null,
	mail: null,
	diasbleuser:{
		list:null
	},
	diasbleagent:{
		list:null
	},
	channelslist:null,
	channelid:8120,
	limits: null, 
};
export default function user(state = initialState, action = {}) {
	switch(action.type) {
	case types.USET_SET_TOKEN:
		return Object.assign(
			{}, state,
			{token: action.data }
		);
		
	case types.SET_JSON:
		return Object.assign(
			{}, state,
			{json: action.data }
		);
	case types.USER_SET_SINGLE:
		return Object.assign(
			{}, state,
			{single: action.data}
		);
	case types.USER_OPERA_HOME:
		return Object.assign(
			{}, state,
			{opera: action.data}
		);
	case types.USER_OPERA_HOMELIST:
		return Object.assign(
			{}, state,
			{operalist: action.data}
		);
	case types.SET_LOWERUSER_INFO:
		return Object.assign(
			{}, state,
			{loweruser: {list: action.data }}
		);
	case types.SET_LEVELUSER_INFO:
		return Object.assign(
			{}, state,
			{loweruser: {level_list: action.data }}
		);
	case types.SET_CASHBACK_VIPUSER://vip玩家页面
		return Object.assign(
			{}, state,
			{vipback: {list: action.data }}
		);
	case types.USER_SET_USERBYID://代理授权页面
		return Object.assign(
			{}, state,
			{userdl: action.data }
		);

	case types.ADMIN_SET_UNIQUENESS:
		return Object.assign(
			{}, state,
			{uniqueness: action.data}
		);
	case types.USER_SET_AGENTDETAILS://代理详细信息
		return Object.assign(
			{}, state,
			{agentdetails: action.data }
		);
	case types.USER_DIRECT_LOWER:
		return Object.assign(
			{}, state,
			{direct: action.data }
		);
	case types.SET_MAIL_LIST://代理详细信息
		return Object.assign(
			{}, state,
			{mails: action.data }
		);
	case types.SET_OPERALIST://代理详细信息========
		return Object.assign(
			{}, state,
			{oper: action.data }
		);
	case types.SET_MAIL_INFO:
		return Object.assign(
			{}, state,
			{mail: action.data }
		);
	case types.SET_DISABLEUSER_INFOS://所有封号的玩家
		return Object.assign(
			{}, state,
			{diasbleuser: {list: action.data }}
		);
	case types.SET_DISABLEAGENT_INFOS://所有封号的代理
		return Object.assign(
			{}, state,
			{diasbleagent: {list: action.data }}
		); 
	case types.SET_CHANNELS_LIST:
		return Object.assign(
			{}, state,
			{channelslist: action.data }
		);
	case types.SET_LIMITS: {
		return Object.assign(
			{}, state,
			{limits: action.data }
		);
	}
	default:
		return state;
	}
}