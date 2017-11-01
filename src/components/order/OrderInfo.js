//
// Author: leafsoar
// Date: 2017-07-26 17:06:29
// 

// 订单详情

import React, { Component } from 'react';
import { Tabs, WhiteSpace, Badge ,NoticeBar, Icon} from 'antd-mobile';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import action from '../../actions';
import './order.css';

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


class OrderInfo extends Component {
	render() {

		// console.log(com);
		return (
			<div className="orderdiv">
			  	<NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
			       恭喜🎉：代理张**充值金币￥100.00(壹佰元整)，获得活动奖励:ipone8一台，请代理张**保持手机或者微信畅通，客服会在7个工作日内联系您，感谢您的支持！
			    </NoticeBar>
			  	<WhiteSpace />
			    <Tabs tabs={tabs}
			      initialPage={1}
			      onChange={(tab, index) => { console.log('onChange', index, tab); }}
			      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
			    >
			      <div className="diamond" style={{minHeight:'72.5vh'}}>
			        Content of first tab
			      </div>
			      <div className="card" style={{minHeight:'72.5vh'}} >
			        Content of second tab
			      </div>
			      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '200px', backgroundColor: '#fff' }}>
			       最新商品敬请期待~
			      </div>
			    </Tabs>
			  
			  </div>
		);
	}
}
export default connect(state => ({
    state: state.user
}), (dispatch) => ({
    actions: bindActionCreators(action.user, dispatch)
}))(OrderInfo);
