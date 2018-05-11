//
// Author: leafsoar
// Date: 2017-07-25 14:56:15
//

// 用户信息列表界面

import React, { Component } from 'react';
import { Accordion, List, SearchBar, WhiteSpace } from 'antd-mobile';

import './user.css';

class UserList extends React.Component {
	

	render() {
		const {history} = this.props;
		return (
			<div>
				<SearchBar placeholder="搜索" maxLength={8} style={{backgroundColor: "#fff", borderColor: "#f5f5f5", color:"#6699ee"}}  maxLength={10}/>
				<WhiteSpace/>
				{this.accordionList()}
			</div>
		);
	}

    accordionList(){
    	const onChange = (key) => {
			console.log(key);
		}
    	return(
			<Accordion defaultActiveKey="0" className="my-accordion" onChange={onChange} extra={"20000"}>
				<Accordion.Panel header="一级玩家">
					<List className="my-list">
						<List.Item arrow="empty"
						  thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
						  multipleLine
						  extra={"20000"}>
							张一
						</List.Item>
						<List.Item arrow="empty"
						  thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
						  multipleLine
						  extra={"20000"}>
							张二
						</List.Item>
						<List.Item arrow="empty"
						  thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
						  multipleLine
						  extra={"20000"}>
							张三
						</List.Item>
					</List>
				</Accordion.Panel>
			</Accordion>
    	);
    }
}

export default UserList
