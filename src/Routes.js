//
// Author: leafsoar
// Date: 2017-07-25 15:29:14
// 

// 路由功能

import React from 'react';
import {
	BrowserRouter,
	Router,
	Route,
	Link
} from 'react-router-dom';


import Dashboard from './dashboard';
import {
	Login,
	UserInfo,
	UserList,
	OrderInfo,
} from './components';

const Routes = () => (
	<BrowserRouter>
	  <Dashboard>
		  <div style={{ height: '100%' }}>
			<Route exact path="/" component={UserList}/>		  
			<Route exact path="/userinfo" component={UserInfo}/>
			<Route exact path="/login" component={Login}/>
			<Route exact path="/userlist" component={UserList}/>
			<Route exact path="/order/info" component={OrderInfo}/>
		  </div>
	  </Dashboard>
	</BrowserRouter>

);

export default Routes;

