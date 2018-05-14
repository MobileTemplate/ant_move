
//
// Author: leafsoar
// Date: 2017-07-25 15:01:45
// 

// 用户信息

import React, { Component } from 'react';

import { NavBar, Drawer } from 'antd-mobile';

import './comm.css';

class TopBar extends Component {
	render() {
		const {onLeftClick, leftContent, rightContent, content, mode, heigth} = this.props;
		return (
			<div>
				<NavBar
				  mode={mode != null ? mode : "dark"}
				  onLeftClick={()=>{
				  	if(onLeftClick != null){
				  		onLeftClick();
				  	}
				  }}
				  leftContent = {leftContent != null ? leftContent : ""}
				  rightContent={rightContent != null ? rightContent : ""}>
				</NavBar>
				<Drawer
				  className="my-drawer"
				  touch={false}
				  dragToggleDistance={0}
				  style={{ minHeight: document.documentElement.clientHeight - heigth }}
				  enableDragHandle
				  sidebar={""}>
					{content}
				</Drawer>
			</div>
		);
	}
}

export default TopBar;