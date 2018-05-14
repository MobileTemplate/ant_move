//
// Author: leafsoar
// Date: 2017-07-25 14:56:15
//

// 用户信息列表界面

import React, { Component } from 'react';
import { Accordion, List, SearchBar, WhiteSpace, Pagination } from 'antd-mobile';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import action from '../../../actions';

import './user.css';

class UserList extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.state = {
        	loading: false
        }
        this.params = {
            'pagesize': 10,
            'pageindex': 0
        };
    }
	componentDidMount() {
        this.select(0);
    }

    select(uid){
    	const {actions, state} = this.props;
        if (state.single != null){
            actions.LevelUserInfo(state.single.id, uid, 0, this.params);
        }
    }
    paging(pageindex){
    	this.params.pageindex = pageindex - 1;
    	this.setState({loading: false});
    }


	render() {
		const {state} = this.props;
		var level_user_info = {};
		if(state.level_user_info != null){
			level_user_info = state.level_user_info;
		}
		
		var data = [];
		if(level_user_info.data != null){
			data = level_user_info.data;
		}
		var page_count_max = this.params.pagesize * (this.params.pageindex + 1);
		const page_count_min = this.params.pagesize * this.params.pageindex;
		if(data.length <= page_count_max){
			page_count_max = data.length;
		}
		var page_count = 1;
		if(level_user_info.page_count != null && level_user_info.page_count > 0){
			page_count = Math.ceil(data.length/this.params.pagesize);
		}
		data = data.slice(page_count_min, page_count_max);
		return (
			<div>
				<SearchBar placeholder="搜索" className="search_bar" maxLength={8}  maxLength={10} onChange={
					(value)=>{
						if(value.toString().length >= 6){
							this.select(Number(value));
						}else if(value.toString() == 0){
							this.select(0);
						}
					}
				}/>
				<WhiteSpace/>
				{this.accordionList(data)}
				<Pagination simple total={page_count} current={1} style={{ marginBottom: '16px' }} onChange={ (value)=>{this.paging(value)} } />
			</div>
		);
	}

    accordionList(data){
    	const onChange = (key) => {
			console.log(key);
		}
		var item = (item, i) => {
			var coin = item.goods.coin;
			if(coin > 10000){
				coin = (Math.floor(coin/10000*100)/100) + "万";
			}else if(coin > 100000000){
				coin = (Math.floor(coin/100000000*100)/100) + "亿";
			}
			return(
				<List.Item key={item.id} arrow="empty"
				  thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
				  multipleLine
				  extra={coin}>
					{item.nick_name}
					<List.Item.Brief>玩家ID: {item.id}</List.Item.Brief>
				</List.Item>
			);
		}
    	return(
			<List className="my-list">
				{data.map(item)}
			</List>
    	);
    }
}

export default connect(state => ({
    state: state.user
}), (dispatch) => ({
    actions: bindActionCreators(action.user, dispatch)
}))(UserList);
