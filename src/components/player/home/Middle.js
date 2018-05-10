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
import './home.css';

class Middle extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: ['', '', ''],
            initialHeight: 80,
        };
    }
    componentDidMount() {
    }

    toGrid(el, index){
        const {history} = this.props;
        if(el.to != null){
            history.push(el.to);
        } 
    }
	
	render() {
		const data1 = [
            {
                icon: require("./img/icon_1.png"),
                text: "代理列表",
                to: "/userlist"
            },
            {
                icon: require("./img/icon_2.png"),
                text: "开通代理",
            },
            {
                icon: require("./img/icon_3.png"),
                text: "玩家信息",
            },
            {
                icon: require("./img/icon_4.png"),
                text: "游戏信息",
            }
        ];
		return (
			<div>
                <div style={{ padding: '5px 0' }} >
                    <Grid data={data1} square={false} columnNum={2} className="not-square-grid" onClick={(el, index)=>{this.toGrid(el, index)}}/>
                </div>
			</div>
		);
	}
}

export default connect(state => ({
    state: state.user
}), (dispatch) => ({
    actions: bindActionCreators(action.user, dispatch)
}))(Middle);