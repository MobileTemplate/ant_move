//
// Author: leafsoar
// Date: 2017-07-26 17:06:29
// 

// 订单详情

import React, { Component } from 'react';
import { Tabs, WhiteSpace, Badge ,NoticeBar, Icon,Card,Grid} from 'antd-mobile';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import $ from 'jquery';
import action from '../../../actions';
import './home.css';

class FangkaShop extends Component {
	render() {
		const data = [
			{
				icon: require("./img/fangka/1.png"),
				text: "￥10/10房卡",
			},
			{
				icon: require("./img/fangka/2.png"),
				text: "￥50/60房卡",
			},
			{
				icon: require("./img/fangka/1.png"),
				text: "￥100/120房卡",
			},
			{
				icon: require("./img/fangka/2.png"),
				text: "￥130/160房卡",
			},
			{
				icon: require("./img/fangka/5.png"),
				text: "￥300/400房卡",
			},
			{
				icon: require("./img/fangka/5.png"),
				text: "￥500/550房卡",
			},
		];

		return (
			<div>
				<Grid data={data} square={false} hasLine={false} columnNum={4}  className="not-square-grid"/>
			</div>
		);
	}
}
export default connect(state => ({
    state: state.user
}), (dispatch) => ({
    actions: bindActionCreators(action.user, dispatch)
}))(FangkaShop);
