//
// Author: leafsoar
// Date: 2017-07-26 17:06:29
// 

// 订单详情

import React, { Component } from 'react';
import { Tabs, WhiteSpace, Badge ,NoticeBar, Icon,Card,Grid} from 'antd-mobile';
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
		const data1 = [
            {
                icon: require("../user/img/diamond/1.png"),
                text: "￥10/10钻石",
            },
            {
                icon: require("../user/img/diamond/2.png"),
                text: "￥50/60钻石",
            },
            {
                icon: require("../user/img/diamond/1.png"),
                text: "￥100/120钻石",
            },
            {
                icon: require("../user/img/diamond/2.png"),
                text: "￥130/160钻石",
            },
            {
                icon: require("../user/img/diamond/5.png"),
                text: "￥300/400钻石",
            },
            {
                icon: require("../user/img/diamond/5.png"),
                text: "￥500/550钻石",
            },
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
			      <div>
			      	 
			        <Grid data={data1} square={false} hasLine={false} columnNum={4} className="not-square-grid"/>
			      	<div className="sub-title">
			      	 <PlaceHolder />
			      	</div>	
			      	<Grid data={data1} square={false} hasLine={false} columnNum={6} className="not-square-grid"/>
			      	<div className="sub-title">
			      	 <PlaceHolders />
			      	 </div>
			      	 <Card full>
				      <Card.Header
				       title="钻石"
				       extra={<a href="#">更多></a>}
				      />
				      <Card.Body>
				        <div>最近一次购买</div>
				      </Card.Body>
				      <Card.Footer content="购买金额：￥100" extra={<div>2017-11-03 14:32:12</div>} />
				    </Card>
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
