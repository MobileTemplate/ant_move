
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
        const data = this.props.data;
		const width = this.props.width;
		const width_1 = (width-4)/3;
        const width_2 = (width-2)/2;
        console.log(width);
		return (
			<div>
                <div>
                    <div style={{ marginTop: 20, height:width_2, width: width_1, backgroundColor: "#FFF",float: "left" }}>
                        <center>
                            <div>
                                <p className="middle-p1">{data.sj1.name}</p>
                                <p className="middle-p2">{data.sj1.money}</p>
                            </div>
                            <div style={{marginTop: width_2-26-width_1-10}}>
                            <img style={{width: width_1 - 10}} src={data.sj1.img} className="bottomimg1"/>
                            </div>
                        </center>
                    </div>
                    <div style={{ marginTop: 20, height:width_2, width: width_1, marginLeft:2, backgroundColor: "#FFF",float: "left" }}>
                        <center>
                            <div>
                                <p className="middle-p1">{data.sj1.name}</p>
                                <p className="middle-p2">{data.sj1.money}</p>
                            </div>
                            <div style={{marginTop: width_2-26-width_1-10}}>
                            <img style={{width: width_1 - 10}} src={data.sj1.img} className="bottomimg1"/>
                            </div>
                        </center>
                    </div>
                    <div style={{ marginTop: 20, height:width_2, width: width_1, marginLeft:2, backgroundColor: "#FFF",float: "left" }}>
                        <center>
                            <div>
                                <p className="middle-p1">{data.sj1.name}</p>
                                <p className="middle-p2">{data.sj1.money}</p>
                            </div>
                            <div style={{marginTop: width_2-26-width_1-10}}>
                            <img style={{width: width_1 - 10}} src={data.sj1.img} className="bottomimg1"/>
                            </div>
                        </center>
                    </div>
                </div>
				<div>
                    <div style={{ marginTop: 2, height:width_1, width: width_2, backgroundColor: "#FFF",float: "left" }}>
                        <div style={{marginLeft: 5, marginTop: 0, float: "left"}}>
                            <p style={{width: (width_2)/2-20}} className="middle-p1">{data.sj2.name}</p>
                            <p className="middle-p2">{data.sj2.money}</p>
                        </div>
                        <div style={{float: "right", marginRight: 3}}>
                            <img src={data.sj1.img} style={{width: (width_2)/2, height: (width_2)/2, marginTop: width_1 - (width_2)/2}} className="bottomimg2"/>
                        </div>
                    </div>
                    <div style={{ marginTop: 2, height:width_1, width: width_2, marginLeft:2, backgroundColor: "#FFF",float: "left" }}>
                        <div style={{marginLeft: 5, marginTop: 0, float: "left"}}>
                            <p style={{width: (width_2)/2-20}} className="middle-p1">{data.sj2.name}</p>
                            <p className="middle-p2">{data.sj2.money}</p>
                        </div>
                        <div style={{float: "right", marginRight: 3}}>
                            <img src={data.sj1.img} style={{width: (width_2)/2, height: (width_2)/2, marginTop: width_1 - (width_2)/2}} className="bottomimg2"/>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ marginTop: 2, marginBottom: 1, height:width_1, width: width_2, backgroundColor: "#FFF",float: "left" }}>
                        <div style={{marginLeft: 5, marginTop: 0, float: "left"}}>
                            <p style={{width: (width_2)/2-20}} className="middle-p1">{data.sj2.name}</p>
                            <p className="middle-p2">{data.sj2.money}</p>
                        </div>
                        <div style={{float: "right", marginRight: 3}}>
                            <img src={data.sj1.img} style={{width: (width_2)/2, height: (width_2)/2, marginTop: width_1 - (width_2)/2}} className="bottomimg2"/>
                        </div>
                    </div>
                    <div style={{ marginTop: 2, marginBottom: 1, height:width_1, width: width_2, marginLeft:2, backgroundColor: "#FFF",float: "left" }}>
                        <div style={{marginLeft: 5, marginTop: 0, float: "left"}}>
                            <p style={{width: (width_2)/2-20}} className="middle-p1">{data.sj2.name}</p>
                            <p className="middle-p2">{data.sj2.money}</p>
                        </div>
                        <div style={{float: "right", marginRight: 3}}>
                            <img src={data.sj1.img} style={{width: (width_2)/2, height: (width_2)/2, marginTop: width_1 - (width_2)/2}} className="bottomimg2"/>
                        </div>
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
}))(TheBottom);