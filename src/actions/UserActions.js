

import * as types from './actionTypes';
import * as api from '../network/Api';

function setJson(data){
	return{
		type: types.SET_JSON,
		data
	}
}

function setToken (data) {
	return {
		type: types.USET_SET_TOKEN,
		data
	};
}

function setSingle(data){
	return {
		type: types.USER_SET_SINGLE,
		data
	};
}


// 获取JSON
export const getJson = () => {
	return (dispatch,getState)=>{
		return (async () =>{
			try{
				var num = new Date().getTime();
				var sjnum = num.toString().substring();
				var url = "http://" + window.location.host;
				const data = await api.getJson("/platform/config.json?sjnum="+sjnum, url);
				setTimeout(()=>dispatch(setJson(data)),0);
			}catch(e){
				console.log('UserAction getJson is error: ' + e);
			}
		})();
	}
}

// 用户登录
export const UserLogin = (params, callback) => {
	return (dispatch, getState) => {
		return (async () => {
			try {
				var data = await api.UserLogin(params, callback);
				api.setToken(data.token)
				dispatch(setToken(data));
			} catch (e) {
				console.log('err ==== ' + JSON.stringify(e));
			}
		})();
	};
}

// 获取用户信息
export const getUser = (uid) => {
	return (dispatch,getState) => {
		return (async () => {
			try {
				const data = await api.GetUser(uid);
				setTimeout(()=>dispatch(setSingle(data)), 0);
			} catch (e) {
				console.log('agentLowerAgent is error: ' + e);
			}
		})();
	};
};