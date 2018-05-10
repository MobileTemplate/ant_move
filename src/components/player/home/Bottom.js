
//
// Author: leafsoar
// Date: 2017-07-25 15:01:45
// 

// 用户信息

import React, { Component } from 'react';
import { Carousel, Grid, WhiteSpace, Card } from 'antd-mobile';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import action from '../../../actions';

import Head from './Head';
import Middle from './Middle';

import './home.css';

class Bottom extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: ['', '', ''],
            initialHeight: 80,
        };
    }
    componentDidMount() {
    }
	
	render() {
		return (
			<div>
				<Card full>
                    <Card.Header
					  title="张三"
					  thumbStyle={{width:'64px',height:'64px'}}
					  thumb={require("./img/tx_1.jpg")}
					  extra={<a className="xq" href="#">详情</a>}/>
					<Card.Body>
						<div>我是张三、家住：安徽省合肥市包河区、联系电话：19090909090</div>
					</Card.Body>
				</Card>
				<WhiteSpace size="xs"/>
				<Card full>
					<Card.Header
					  title="李四"
					  thumbStyle={{width:'64px',height:'64px'}}
					  thumb={require("./img/tx_2.jpg")}
					  extra={<a className="xq" href="#">详情</a>}/>
					<Card.Body>
						<div>我是李四，家住：安徽省合肥市蜀山区、联系电话：18289088908</div>
					</Card.Body>
				</Card>
				<WhiteSpace size="xs" />
				<Card full>
					<Card.Header
					  title="王五"
					  thumbStyle={{width:'64px',height:'64px'}}
					  thumb={require("./img/tx_3.jpg")}
					  extra={<a className="xq" href="#">详情</a>}/>
					<Card.Body>
						<div>我是王五，家住：安徽省合肥市蜀山区、联系电话：13234255687</div>
					</Card.Body>
				</Card>
			</div>
		);
	}
}

export default connect(state => ({
    state: state.user
}), (dispatch) => ({
    actions: bindActionCreators(action.user, dispatch)
}))(Bottom);