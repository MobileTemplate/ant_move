
export function GetIsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone", "SymbianOS"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
	return !flag;
};

export function GetWidth() {
    var width = document.documentElement.clientWidth;
    if(!GetIsPC()){
        width = 414;
    }
	return width;
};

export function GetHeight() {
    var height = document.documentElement.clientHeight;
    if(!GetIsPC()){
        height = 736;
    }
	return height;
};

// 