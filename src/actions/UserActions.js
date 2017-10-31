//
// Author: leafsoar
// Date: 2017-07-25 18:34:39
//

import * as types from './actionTypes';

export const userLogin = (data) => {
	// callback();
	return {
		type: types.USER_SET_LOGIN,
		data
	};
};
