
//
// Author: leafsoar
// Date: 2017-07-25 15:01:45
// 

// 用户信息

import React, { Component } from 'react';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import action from '../../../actions';

import TopBar from '../../comm/TopBar';

import { List } from 'antd-mobile';

const Item = List.Item;

class Home extends Component {
	constructor(props, context) {
		super(props, context);
	}
	componentDidMount() {
        const {actions, state} = this.props;
        const {token, single} = state;
        if(token != null) {
        	actions.getUser(token.uid);
    	}	
    }
	render() {
		return(
			<div>
				<TopBar
				  leftContent = {"我的玩家"}
				  content = {
					<div>
						{this.homeView()}
					</div>
				  }/>
			</div>
		)
	}

	homeView(){
		const {state} = this.props;
		var info = {};
		const {single} = state;
		if(single != null){
			info = single;
		}
		var phone = info.phone;
		if(phone != null && phone !== ""){
			var myphone = info.phone.substr(3, 4);  
			phone = info.phone.replace(myphone, "****"); 
		}
	    return (
			<div style={{padding: '0', margin: '0'}}>
				<List style={{padding: '0', margin: '0'}}>
					<Item arrow="horizontal" multipleLine style={{height: '100px',backgroundColor: "#0091EA"}} onClick={() => {}}>
						<img style={{height: '65px', width: '65px', borderRadius: "5px", float: "left"}} src={require("./img/tx_1.jpg")}/>
						<div style={{float: "left", marginLeft: "10px", marginTop: "10px", color: "#FFF"}}>
							{info.username}
							<br/>
							<span style={{fontSize: "12px", color: "#BDBDBD"}}>{phone}</span>
						</div>
					</Item>
				</List>
				<List renderHeader={() => ''} className="my-list">
					<Item arrow="horizontal" onClick={() => {}}>账单</Item>
					<Item extra={(info.goods != null && info.goods.cashback != null) ? info.goods.cashback/100 : "0.00"} arrow="horizontal" onClick={() => {}}>余额</Item>
				</List>
			</div>
		);
	}
}

export default connect(state => ({
    state: state.user
}), (dispatch) => ({
    actions: bindActionCreators(action.user, dispatch)
}))(Home);
