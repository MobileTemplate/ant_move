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
	Login
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

//我的财富
import {
	WealthHome
} from './components/wealth';

import {
	OrderhHome
} from './components/order';

const Routes = () => (
	<BrowserRouter>
	  <Dashboard>
		  <div style={{ height: '100%' }}>
			<Route exact path="/" component={Home}/>
			<Route exact path="/login" component={Login}/>


			<Route exact path="/player/home" component={Home}/>
			<Route exact path="/player/userlist" component={UserList}/>

			<Route exact path="/wealth/home" component={WealthHome}/>

			
			<Route exact path="/order/home" component={OrderhHome}/>


			<Route exact path="/my/home" component={MyHome}/>

		  </div>
	  </Dashboard>
	</BrowserRouter>

);

export default Routes;

