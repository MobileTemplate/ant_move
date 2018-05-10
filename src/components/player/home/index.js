
//
// Author: leafsoar
// Date: 2017-07-25 15:01:45
// 

// 用户信息

import React, { Component } from 'react';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import action from '../../../actions';

import { WhiteSpace } from 'antd-mobile';

import Head from './Head';
import Middle from './Middle';
import Bottom from './Bottom';

import './home.css';

class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {

        };
    }
    componentDidMount() {

    }

	render() {
		return (
			<div>
			 	<Head/>
                <Middle/>
                <WhiteSpace size="sm"/>
                <Bottom/>
			</div>
		);
	}
}

export default connect(state => ({
    state: state.user
}), (dispatch) => ({
    actions: bindActionCreators(action.user, dispatch)
}))(Home);