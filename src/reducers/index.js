//
// Author: leafsoar
// Date: 2017-07-25 18:33:55
// 


import { combineReducers } from 'redux';

import user from './User';
import change from './Change';
import order from './Order';
import message from './Message';
import sataic from './Sataic';

export default combineReducers({
	user,
	message,
	change,
	order,
	sataic
});
