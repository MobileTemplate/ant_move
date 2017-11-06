//
// Author: leafsoar
// Date: 2017-07-25 15:29:14
// 

// 路由功能

import React from 'react';
import {
	BrowserRouter,
	Route
} from 'react-router-dom';


import Dashboard from './dashboard';
import {
	Login,
	OrderInfo
} from './components';

//我的玩家
import {
	Home,
	UserList
} from './components/player';

//我的信息
import {
	MyHome
} from './components/my';

const Routes = () => (
	<BrowserRouter>
	  <Dashboard>
		  <div style={{ height: '100%' }}>
			<Route exact path="/" component={Home}/>		  
			<Route exact path="/my" component={MyHome}/>
			<Route exact path="/userlist" component={UserList}/>
			<Route exact path="/login" component={Login}/>
			<Route exact path="/player" component={Home}/>
			<Route exact path="/order/info" component={OrderInfo}/>
		  </div>
	  </Dashboard>
	</BrowserRouter>

);

export default Routes;

