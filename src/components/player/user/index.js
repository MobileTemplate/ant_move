//
// Author: leafsoar
// Date: 2017-07-25 14:56:15
//

// 用户信息列表界面

import React, { Component } from 'react';
import { Icon } from 'antd-mobile';

import TopBar from '../../comm/TopBar'
import UserList from './UserList'

class User extends React.Component {
	render() {
		const {history} = this.props;
		return (
			<div>
				<TopBar
				  onLeftClick={()=>{history.go(-1)}}
				  leftContent = {<Icon type="left" />}
				  rightContent = "代理列表"
				  content = {
				  	<div>
				  		<UserList history={this.props.history}/>
				  	</div>
				  }/>
			</div>
		);
	}
}

export default User
