

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
export function getJson (url) {
    return helper.pureGet(url, null)
}

export function setUrl(url){
    head_url=url;
}

export const OperaPerform = (uid, upid, params, key) => {
    if(key == 1){
        return helper.getRequest(`/agent/${uid}/area/stream/month/${upid}`, params);
    }else{
        return helper.getRequest(`/agent/${uid}/cashback/month/${upid}`, params);
    }    
}
// /:id/perday/order/list

export const PerDayOrder = (id, params) => {
    return helper.getRequest(`/${head_url}/${id}/perday/order/list`, params);
}
export const PerDayOrderDetails = (id, params) => {
    return helper.getRequest(`/${head_url}/${id}/perday/order/details`, params);
}

// 发布邮件接口
export const SelectMailInfo = (uid, mid, callback) => {
    return helper.getRequest(`/agent/${uid}/email/details/${mid}`, null, callback);
};

// 发布邮件接口
export const SelectMail = (id, params, callback) => {
    return helper.getRequest(`/${head_url}/${id}/email/list`, params, callback);
};

// 发布邮件接口
export const addEmail = (id, params, callback) => {
    return helper.postRequest(`/agent/${id}/email`, params, callback);
};

// 添加代理接口
export const addAgent = (id, params, callback) => {
    return helper.postRequest(`/agent/${id}/add`, params, callback);
};
// 用户登录-接口
export function UserLogin (params, callback) {
	return helper.postRequest(`/agent/login`, params, callback);
};
// 更具ID获取用户信息接口
export function userinfo (uid, callback) {
    return helper.getRequest(`/${head_url}/${uid}/info`, null, callback);   
};
export function userinfos (id, uid, callback) {
    return helper.getRequest(`/${head_url}/${id}/info/${uid}`, null, callback);   
};
// vip玩家/agent/:id/lower/agentinfo/:uid
export function VipCashBackUser (id, uid, params) {
    return helper.getRequest(`/${head_url}/${id}/lower/agentinfo/${uid}`, params);
};
//玩家信息
export function LowerUserInfo (id, uid, params) {
    return helper.getRequest(`/${head_url}/${id}/lowerinfo/${uid}`, params);
};
// 按等级查询玩家信息
export function LevelUserInfo (id, uid, level, params) {
    return helper.getRequest(`/agent/${id}/lower/agentinfo/${uid}/${level}`, params);
};
//充值统计得到下属玩家每个人的总充值金额
export function LowerOrderStatis (id, uid, params) {
    return helper.getRequest(`/${head_url}/${id}/lower/order/list/${uid}`, params);
};
//玩家充值记录
export function QueryOrderInfo (id, uid, params) {
    return helper.getRequest(`/${head_url}/${id}/lower/user/order/list/${uid}`, params);
};
// 修改密码`/agent/${id}/modifypassword`
export function ChangePwd (id, params, callback) {
    return helper.postRequest(`/agent/${id}/modifypassword`, params, callback);
};
// 重置密码
export function ResetPwd (id, uid, callback) {
    return helper.postRequest(`/opera/${id}/reset/password/${uid}`, null, callback);
};

//代理和总代的下级所有玩家的房卡消耗记录
export function LowerChangeList (id,uid, params) {
    return helper.getRequest(`/${head_url}/${id}/lower/change/${uid}`, params);
};

//查询申请提现
export function GetMessage(id, uid, params){
    return helper.getRequest(`/${head_url}/${id}/select/messages/${uid}`, params);
}

//查询申请提现
export function GetMessageDateInfo(id, params){
    return helper.getRequest(`/${head_url}/${id}/select/messages`, params);
}
//查询申请提现
export function GetMessageInfo(id, uid, params){
    return helper.getRequest(`/agent/${id}/messages/${uid}`, params);
}
//申请提现
export function ApplyCashClean(uid, cash, callback){
    return helper.postRequest(`/agent/${uid}/cashback/request/${cash}`, null, callback) 
}

// 每月总业绩业绩
export function CashBackMonth (uid, params) {
    return helper.getRequest(`/agent/${uid}/cashback/month/0`, params);
}

// 每月详细业绩查询
export function AgentCashBackByUser (uid, params) {
    return helper.getRequest(`/agent/${uid}/cashback`, params);
};

// 每月总业绩业绩
export function StreamMonth (uid, params) {
    return helper.getRequest(`/agent/${uid}/area/stream/month/0`, params);
}

// 每月总业绩业绩
export function Stream (uid, params) {
    return helper.getRequest(`/agent/${uid}/area/stream`, params);
}

//最少提现金额
export const mincashback = () => {
    return helper.getRequest("/static/cashback.json");
};
// 解除绑定功能
export function UserIsJb (id, params, callback) {
    return helper.postRequest(`/admin/${id}/reset/invitekey`, params, callback);
};
// 绑定功能
export function UserIsBd (id, uid, params, callback) {
    return helper.postRequest(`/admin/${id}/invitekey/${uid}`, params, callback);
};
//管理员给代理添加房卡等物品变化记录
export function QueryChangesGoods(uid, params) {
    return helper.getRequest(`/agent/${uid}/changes/goodsinfo`, params);
}
// 获取管理员给代理充值唯一标识
export const agentUniqueness = () => {
    return helper.getRequest(`/uniqueness`);
}
//物品管理修改管理员给代理添加房卡等物品
export const AddGoods = (uid, params, callback) => {
    return helper.postRequest(`/admin/${uid}/addgoods`, params, callback);
};
//代理信息修改页面/agent/:id/updateagent/:upid
export function AgentEdit (id, upid, params, callback) {
    return helper.postRequest(`/agent/${id}/updateagent/${upid}`, params, callback);
};
//申请提现处理
export const chuliapply = (id,mid,mode,callback) => {
    return helper.postRequest(`/agent/${id}/messages/update/${mid}/${mode}`, null, callback);
}
//申请提现处理
export const autoapply = (params,callback) => {
    // return helper.postRequest(`/wxgzh/transfers/request`, params, callback);
}
//运维页面业绩查询
export function QueryOperaCashback(id,uid,params,key) {
    if(key == 2){
        return helper.getRequest(`/${head_url}/${id}/opera/cashback/${uid}`,params);
    }else{
        return helper.getRequest(`/${head_url}/${id}/opera/stream/${uid}`,params);
    }
    
}

//修改配置文件
export function getUpdateSataic(cid, data, filename, callback){
    var url = `/channels/${cid}/update/config/${filename}`;
    if(cid == 0){
        url = `/cfgm/files/${filename}`;
    }
    return helper.postRequest(url, data, callback)
}

//配置文件
export function getStaticFile(cid, filename){
    var url = `/channels/${cid}/config/${filename}`;
    if(cid == 0){
        url = `/cfgm/files/${filename}`;
    }
    return helper.getRequest(url)
}
//获取目录列表
export function getStatic(id, cid){
    return helper.getRequest(`/admin/${id}/configs/${cid}`)
}
//查询游戏
export function getFindGame(id, tradeno){
    return helper.getRequest(`/users/${id}/tables/${tradeno}`)
}

//查找当前用户的直接下级玩家
export function DirectLower(id,params) {
    return helper.getRequest(`/${head_url}/${id}/direct/lowerinfo`,params);
}
//运维用户提现记录
export function WithdrawList(id,uid,params) {
    return helper.getRequest(`/agent/${id}/goods/count/${uid}`,params);
}
//查找
export function StreamDay(id,params) {
    return helper.getRequest(`/agent/${id}/area/stream/day`,params);
}
//运维首页需求数据
export function OperaHome(id) {
    return helper.getRequest(`/${head_url}/${id}/opera/home`);
}
//agent/10001/opera/home/list
export function OperaHomeList(id,params) {
    return helper.getRequest(`/${head_url}/${id}/opera/home/list`,params);
}

export function GetTransfersDateInfo(channel,params) {
    return helper.getRequest(`/wxgzh/transfers/${channel}`,params);
}
export function FirstLowerOrder(id,uid,params) {
    return helper.getRequest(`/agent/${id}/firstlower/order/${uid}`,params);
}

export function QueryOrderInfos(id,params) {
    return helper.getRequest(`/agent/${id}/orders/info`,params);
}

export function Winning(id,params) {
    return helper.getRequest(`/admin/${id}/lucky`,params);
}
//查询所有封号玩家
export function GetDisableUser(id,params) {
    return helper.getRequest(`/agent/${id}/disable/userinfo`,params);
}
//解除玩家封号
export function RelieveDisableUser (id,mid,data,callback) {
    return helper.postRequest(`/agent/${id}/relieve/disable/user/${mid}`,data, callback);
};
//解除代理封号
export function RelieveDisableAgent (id,mid,data,callback) {
    return helper.postRequest(`/agent/${id}/relieve/disable/agent/${mid}`,data, callback);
};
//查询所有封号代理
export function GetDisableAgent(id,params) {
    return helper.getRequest(`/agent/${id}/disable/agentinfo`,params);
}
//玩家封号
export function DisableUser (id,uid,params, callback) {
    return helper.postRequest(`/agent/${id}/disable/user/${uid}`, params, callback);
};
//代理封号
export function DisableAgent (id,uid,params, callback) {
    return helper.postRequest(`/agent/${id}/disable/agent/${uid}`, params, callback);
};
export function ChannelsList() {
    return helper.getRequest(`/users/channelslist`);
}
export function OperaList (id,params) {
    return helper.getRequest(`/${head_url}/${id}/opera/list`, params);
};
