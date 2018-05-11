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

class DiamondShop extends Component {
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
			<div style={{
		      backgroundColor: '#ebebef',
		      textAlign: 'left',
		      height: '30px',
		      lineHeight: '20px',
		      width: '100%',
		      fontSize:"12px",
		    }}
		    {...props}>
		    	<Icon />
		    	热卖促销
		    </div>
		);
		const PlaceHolders = props => (
			<div style={{
		      backgroundColor: '#ebebef',
		      textAlign: 'left',
		      height: '30px',
		      lineHeight: '20px',
		      width: '100%',
		      fontSize:"12px",
		    }}
		    {...props}>
		    	<Icon />
		    	钻石购买记录
		    </div>
		);

		return (
			<div>
				<Grid data={data1} square={false} hasLine={false} columnNum={4} className="not-square-grid"/>
				<div className="sub-title">
					<PlaceHolder />
				</div>	
				<Grid data={data2} square={false} hasLine={false} columnNum={5} className="not-square-grid"/>
				<div className="sub-title">
					<PlaceHolders />
				</div>
				<Card full>
					<Card.Header
					  title="钻石"
					  extra={<a href="#">更多></a>}/>
					<Card.Body>
						<div>最近一次购买</div>
					</Card.Body>
					<Card.Footer content="购买金额：￥100" extra={<div>2017-11-03 14:32:12</div>} />
				</Card>
			</div>
		);
	}
}
export default connect(state => ({
    state: state.user
}), (dispatch) => ({
    actions: bindActionCreators(action.user, dispatch)
}))(DiamondShop);
