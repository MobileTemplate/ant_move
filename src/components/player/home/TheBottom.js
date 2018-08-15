
import React, { Component } from 'react';
import { Carousel, Grid, WhiteSpace, Card } from 'antd-mobile';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import action from '../../../actions';

import Head from './Head';
import Middle from './Middle';

import './home.css';

class TheBottom extends Component {
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
		const width_2 = (width-2)/2;
		return (
			<div>
                <div>
                    <div style={{ marginTop: 20, height:width_2, width: width_1, backgroundColor: "#FFF",float: "left" }}>
                    </div>
                    <div style={{ marginTop: 20, height:width_2, width: width_1, marginLeft:2, backgroundColor: "#FFF",float: "left" }}>
                    </div>
                    <div style={{ marginTop: 20, height:width_2, width: width_1, marginLeft:2, backgroundColor: "#FFF",float: "left" }}>
                    </div>
                </div>
				<div>
                    <div style={{ marginTop: 2, height:width_1, width: width_2, backgroundColor: "#FFF",float: "left" }}>
                    </div>
                    <div style={{ marginTop: 2, height:width_1, width: width_2, marginLeft:2, backgroundColor: "#FFF",float: "left" }}>
                    </div>
                </div>
                <div>
                    <div style={{ marginTop: 2, marginBottom: 1, height:width_1, width: width_2, backgroundColor: "#FFF",float: "left" }}>
                    </div>
                    <div style={{ marginTop: 2, marginBottom: 1, height:width_1, width: width_2, marginLeft:2, backgroundColor: "#FFF",float: "left" }}>
                    </div>
                </div>
				{/* <div style={{ marginTop: 2, height:112, width: width_3,marginLeft:2, backgroundColor: "#FFF",float: "left" }}>
				</div>
				<div style={{ marginTop: 2, height:112, width: width_3,marginLeft:2, backgroundColor: "#FFF",float: "left" }}>
				</div>
				<div style={{ marginTop: 2, height:112, width: width_3,marginLeft:2, backgroundColor: "#FFF",float: "left" }}>
				</div>
				<div style={{ marginTop: 2, height:112, width: width_3,marginLeft:2, backgroundColor: "#FFF",float: "left" }}>
				</div> */}
			</div>
		);
	}
}

export default connect(state => ({
    state: state.user
}), (dispatch) => ({
    actions: bindActionCreators(action.user, dispatch)
}))(TheBottom);