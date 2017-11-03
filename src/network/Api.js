

// import * as confg from "../../public/platform/config.json";
import * as helper from './helper';

var head_url="agent";
// token
export function setToken(token) {
	helper.setToken(token);
}

// 是这 host
export function setHost(url) {
    helper.setHost(url);
}

// token
export function getToken() {
	return helper.getToken();
}

// 获取 JSON
export function getJson (path, url, callback) {
    return helper.getRequest(path, null, callback, url)
}

export function setUrl(url){
    head_url=url;
}

// 用户登录-接口
export function UserLogin (params, callback) {
	return helper.postRequest(`/agent/login`, params, callback);
};

// 更具ID获取个人信息
export function GetUser (uid, callback) {
    return helper.getRequest(`/agent/${uid}/info`, null, callback);   
};