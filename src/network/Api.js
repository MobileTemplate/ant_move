

// import * as confg from "../../public/platform/config.json";
import * as helper from './helper';

var is_login = false;
var head_url="agent";
// token
export function setToken(token) {
	helper.setToken(token);
}

// 传入是否已登录
export function setIsLogin(is_show) {
    is_login = is_show;
}

// 获取是否已登录
export function getIsLogin() {
    return is_login;
}

// 是这 host
export function setHost(url) {
    helper.setHost(url);
}

// 获取 JSON
export function getJson (path, url, callback) {
    return helper.getRequest(path, null, callback, url)
}

export function setUrl(url){
    head_url = url;
}

// 用户登录-接口
export function UserLogin (params, callback) {
	return helper.postRequest(`/agent/login`, params, callback);
};

// 更具ID获取个人信息
export function GetUser (uid, callback) {
    return helper.getRequest(`/agent/${uid}/info`, null, callback);   
};

// 按等级查询下级玩家信息
export function LevelUserInfo (id, uid, level, params) {
    return helper.getRequest(`/agent/${id}/lower/agentinfo/${uid}/${level}`, params);
};