//
// Author: leafsoar
// Date: 2017-07-31 10:33:27
// 


let helper = {
	token: '',
	host: ''
};

export const setToken = (token) => {
	helper.token = token;
};

export const getToken = () => {
	return helper.token;
};

export const setHost = (url) => {
	helper.host = url;
};

const getParamsStr = (params) => {
	let paramstr = '';
	let param = params || {};
	if (param) {
		let index = 0;
		for(let i in param) {
			if (index > 0) {
				paramstr += '&';
			}
			paramstr += i + '=' + encodeURI(param[i]);
			index+=1;			
		}
	}
	if (paramstr.length > 0) {
		paramstr = "?" + paramstr;
	}
	return paramstr;
};

const request = (url, context, callback) => {
	const ispost = context && context.method === 'POST';
	if (ispost) {
		console.log('post request: ' + url);
	} else {
		console.log('get request: ' + url);
	}
	// console.log(context)
	// safari 兼容 headers
	let myHeaders = new Headers({
		// "Authorization": "Bearer ",
		// 'Accept': 'application/json',
		"Content-Type": "application/x-www-form-urlencoded"
	});
	context.headers = myHeaders;
	// 在 url 后面加 token
	let curl = '';
	if (url.indexOf('?') >= 0) {
		curl = url + "&token=" + helper.token;
	} else {
		curl = url + "?token=" + helper.token;
	}

	return new Promise(function (resolve, reject) {
		fetch(curl, context)
			.then(response => {
				var status = response.status;
				if (status >= 200 && status <= 204) {
					// 请求成功
					return response.text();
				} else if (status >= 400 && status <= 400) {
					response.text().then((text)=>{
						// console.log('=== ' + callback);
						var msg = JSON.parse(text).msg;
						// reject(msg);
						if (callback) {
							callback(false, msg);
						}
					});
				}
				return null;
			})
			.then(body => {
				if (body) {
					var data = JSON.parse(body);
					resolve(data);
					if (callback) {
						callback(true, data);
					}
				}
			})
			.catch(error => {
				console.log('==== 3');
				reject(error);
			});
	});	
};

// 返回 get 请求的加参数的 url 形式
const getUrl = (path, params, url) => {
	let ret = helper.host + path;
	if(url != null && url != "") {
		ret = url + path;
	}
	let paramstr = getParamsStr(params);
	return ret + paramstr;
};

export function getRequest(path, params, callback, url) {
	const context = {
		method: 'GET'
	};
	return request(getUrl(path, params, url), context, callback);
}

export function postRequest(url, params, callback) {
	const context = {
		method: 'POST'
		// body: JSON.stringify(params)
	};
	if (params != null) {
		context.body = JSON.stringify(params);
	}
	return request(getUrl(url), context, callback);
}

export function pureGet(url) {
	const context = {
		method: 'GET'
	};
	return request(url, context);
}
