
import React, { Component } from 'react';
import { Carousel, Grid, WhiteSpace, Card } from 'antd-mobile';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import action from '../../../actions';

import Head from './Head';
import Middle from './Middle';

import './home.css';

class Contest extends Component {
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
		const width = document.documentElement.clientWidth;
		const width_1 = (width-4)/3;
		const width_2 = (width-4)/2.5;
		const width_3 = (width-8)/4;
		return (
			<div>
				<div style={{ marginTop: 5, height: width_1, width: width, backgroundColor: "#FFF" }}>
				</div>
			</div>
		);
	}
}

export default connect(state => ({
    state: state.user
}), (dispatch) => ({
    actions: bindActionCreators(action.user, dispatch)
}))(Contest);