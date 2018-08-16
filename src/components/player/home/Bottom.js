
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
		const width = document.documentElement.clientWidth;
		const width_1 = (width-4)/3;
		const width_2 = (width-4)/2.5;
		const width_3 = (width-6)/4;
		const data = this.props.data;
		console.log(data);
		return (
			<div>
				<div style={{marginTop: 5, height:226, width: width_2, backgroundColor: "#FFF",float: "left" }}>
					<center>
						<div>
							<p className="middle-p1">{data.sj1.name}</p>
							<p className="middle-p2">{data.sj1.money}</p>
						</div>
						<div style={{marginTop: 200-width_2 - 10}}>
							<img style={{width: width_2 - 10}} src={data.sj1.img} className="bottomimg1"/>
						</div>
					</center>
				</div>
				<div style={{marginTop: 5, height:112, width: width-width_2-2,marginLeft:2, backgroundColor: "#FFF",float: "left" }}>
					<div style={{marginLeft: 10, marginTop: 0,float: "left"}}>
						<p style={{width: (width-width_2-2)/2-20}} className="middle-p1">{data.sj2.name}</p>
						<p className="middle-p2">{data.sj2.money}</p>
					</div>
					<div style={{float: "right", marginRight: 3}}>
						<img src={data.sj1.img} className="bottomimg2"/>
					</div>
				</div>
				<div style={{ marginTop: 2, height:112, width: width-width_2-2,marginLeft:2, backgroundColor: "#FFF",float: "left" }}>
					<div style={{marginLeft: 10, marginTop: 0,float: "left"}}>
						<p style={{width: (width-width_2-2)/2-20}} className="middle-p1">{data.sj2.name}</p>
						<p className="middle-p2">{data.sj2.money}</p>
					</div>
					<div style={{float: "right", marginRight: 3}}>
						<img src={data.sj1.img} className="bottomimg2"/>
					</div>
				</div>
				<div style={{ marginTop: 2, height:134, width: width_3, backgroundColor: "#FFF",float: "left" }}>
					<center>
						<div>
							<p className="middle-p1">{data.sj1.name}</p>
							<p className="middle-p2">{data.sj1.money}</p>
						</div>
						<div style={{marginTop: 108- width_3 - 10}}>
						<img style={{width: width_3 - 10}} src={data.sj1.img} className="bottomimg1"/>
						</div>
					</center>
				</div>
				<div style={{ marginTop: 2, height:134, width: width_3,marginLeft:2, backgroundColor: "#FFF",float: "left" }}>
					<center>
						<div>
							<p className="middle-p1">{data.sj1.name}</p>
							<p className="middle-p2">{data.sj1.money}</p>
						</div>
						<div style={{marginTop: 108- width_3 - 10}}>
						<img style={{width: width_3 - 10}} src={data.sj1.img} className="bottomimg1"/>
						</div>
					</center>
				</div>
				<div style={{ marginTop: 2, height:134, width: width_3,marginLeft:2, backgroundColor: "#FFF",float: "left" }}>
					<center>
						<div>
							<p className="middle-p1">{data.sj1.name}</p>
							<p className="middle-p2">{data.sj1.money}</p>
						</div>
						<div style={{marginTop: 108- width_3 - 10}}>
						<img style={{width: width_3 - 10}} src={data.sj1.img} className="bottomimg1"/>
						</div>
					</center>
				</div>
				<div style={{ marginTop: 2, height:134, width: width_3,marginLeft:2, backgroundColor: "#FFF",float: "left" }}>
					<center>
						<div>
							<p className="middle-p1">{data.sj1.name}</p>
							<p className="middle-p2">{data.sj1.money}</p>
						</div>
						<div style={{marginTop: 108- width_3 - 10}}>
						<img style={{width: width_3 - 10}} src={data.sj1.img} className="bottomimg1"/>
						</div>
					</center>
				</div>
			</div>
		);
	}
}

export default connect(state => ({
    state: state.user
}), (dispatch) => ({
    actions: bindActionCreators(action.user, dispatch)
}))(Bottom);