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

const tabs = [
	{ title: <Badge text={'促销'}>钻石</Badge> },
	{ title: <Badge text={'9折'}>房卡</Badge> },
	{ title: <Badge dot>其他</Badge> },
];

const tabs2 = [
	{ title: 'First Tab', sub: '1' },
	{ title: 'Second Tab', sub: '2' },
	{ title: 'Third Tab', sub: '3' },
];


class CoinShop extends Component {
	render() {
		const data1 = [
            {
                icon: require("./img/diamond/1.png"),
                text: "￥10/10钻石",
            },
            {
                icon: require("./img/diamond/2.png"),
                text: "￥50/60钻石",
            },
            {
                icon: require("./img/diamond/1.png"),
                text: "￥100/120钻石",
            },
            {
                icon: require("./img/diamond/2.png"),
                text: "￥130/160钻石",
            },
            {
                icon: require("./img/diamond/5.png"),
                text: "￥300/400钻石",
            },
            {
                icon: require("./img/diamond/5.png"),
                text: "￥500/550钻石",
            },
        ];
        const data2 = [
            {
                icon: require("./img/diamond/1.png"),
                text: "￥10/10钻石",
            },
            {
                icon: require("./img/diamond/2.png"),
                text: "￥50/60钻石",
            },
            {
                icon: require("./img/diamond/1.png"),
                text: "￥100/120钻石",
            },
            {
                icon: require("./img/diamond/2.png"),
                text: "￥130/160钻石",
            },
            {
                icon: require("./img/diamond/5.png"),
                text: "￥300/400钻石",
            }
        ];

        const PlaceHolder = props => (
		  <div
		    style={{
		      backgroundColor: '#ebebef',
		      textAlign: 'left',
		      height: '30px',
		      lineHeight: '20px',
		      width: '100%',
		      fontSize:"12px",
		    }}
		    {...props}
		  ><Icon />热卖促销</div>
		);
		const PlaceHolders = props => (
		  <div
		    style={{
		      backgroundColor: '#ebebef',
		      textAlign: 'left',
		      height: '30px',
		      lineHeight: '20px',
		      width: '100%',
		      fontSize:"12px",
		    }}
		    {...props}
		  ><Icon />钻石购买记录</div>
		);

		return (
			<div>
				最新商品敬请期待~
			</div>
		);
	}
}
export default connect(state => ({
    state: state.user
}), (dispatch) => ({
    actions: bindActionCreators(action.user, dispatch)
}))(CoinShop);
