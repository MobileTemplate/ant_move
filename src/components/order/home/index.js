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

import CoinShop from './CoinShop';
import DiamondShop from './DiamondShop';
import FangkaShop from './FangkaShop';
import TopBar from '../../comm/TopBar';

const tabs = [
	{ title: <Badge text={'促销'}>钻石</Badge> },
	{ title: <Badge text={'9折'}>房卡</Badge> },
	{ title: <Badge text={'9折'} dot>金币</Badge> },
];


class Home extends Component {
	render() {
		return (
			<TopBar
			  heigth={95}
			  leftContent = "精品商城"
			  content = {
				<div className="orderdiv">
					<NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
						恭喜🎉：代理张**充值金币￥100.00(壹佰元整)，获得活动奖励:ipone8一台，请代理张**保持手机或者微信畅通，客服会在7个工作日内联系您，感谢您的支持！
					</NoticeBar>
					<WhiteSpace />
					<Tabs tabs={tabs}
					  initialPage={0}
					  onChange={(tab, index) => { console.log('onChange', index, tab); }}
					  onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}>
						<DiamondShop/>
						<FangkaShop/>
						<CoinShop/>
					</Tabs>
				</div>
			  }/>
			
		);
	}
}
export default connect(state => ({
    state: state.user
}), (dispatch) => ({
    actions: bindActionCreators(action.user, dispatch)
}))(Home);
