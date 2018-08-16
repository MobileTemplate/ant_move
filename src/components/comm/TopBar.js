
//
// Author: leafsoar
// Date: 2017-07-25 15:01:45
// 

// 用户信息

import React, { Component } from 'react';

import { NavBar, Drawer } from 'antd-mobile';

import './comm.css';

class TopBar extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			open: true,
		}
	}
	render() {
		const {onLeftClick, leftContent, rightContent, content, mode, heigth, sidebar, title} = this.props;
		var {open} = this.props
		if(open== null){
			open = false
		}
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
				  {title}
				</NavBar>
				<Drawer
				  className="my-drawer"
				  touch={false}
				  dragToggleDistance={0}
				  style={{ minHeight: document.documentElement.clientHeight - heigth }}
				  enableDragHandle
				  open={open}
				  sidebar={sidebar == null ? "" : sidebar}
				  onOpenChange={this.onOpenChange}>
					{content}
				</Drawer>
			</div>
		);
	}
}

export default TopBar;