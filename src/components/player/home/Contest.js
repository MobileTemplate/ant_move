
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
		const width = this.props.width;
		const width_1 = (width-4)/3;
		const width_2 = (width-4)/2.5;
		const width_3 = (width-8)/4;
		return (
			<div>
				<div style={{ marginTop: 5, height: width_1, width: width, backgroundColor: "#FFF" }}>
					<div style={{ marginTop: 2, height:width_1, width: width_3, backgroundColor: "#FFF",float: "left" }}>
						<center>
							<img style={{width: width_3, height: width_3}} src={require("./img/tj1.png")} className="middle1"/>
							<p className="middle-p2">春节送礼优选</p>
						</center>
					</div>
					<div style={{ marginTop: 2, height:width_1, width: width_3,marginLeft:2, backgroundColor: "#FFF",float: "left" }}>
						<center>
							<img style={{width: width_3, height: width_3}} src={require("./img/tj1.png")} className="middle1"/>
							<p className="middle-p2">春节送礼优选</p>
						</center>
					</div>
					<div style={{ marginTop: 2, height:width_1, width: width_3,marginLeft:2, backgroundColor: "#FFF",float: "left" }}>
						<center>
							<img style={{width: width_3, height: width_3}} src={require("./img/tj1.png")} className="middle1"/>
							<p className="middle-p2">春节送礼优选</p>
						</center>
					</div>
					<div style={{ marginTop: 2, height:width_1, width: width_3,marginLeft:2, backgroundColor: "#FFF",float: "left" }}>
						<center>
							<img style={{width: width_3, height: width_3}} src={require("./img/tj1.png")} className="middle1"/>
							<p className="middle-p2">春节送礼优选</p>
						</center>
					</div>
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