
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
                icon: require("./img/tj.png"),
                text: "玩家信息",
                to: "/player/userlist"
            },
            {
                icon: require("./img/tj1.png"),
                text: "开通代理",
            },
            {
                icon: require("./img/tj2.png"),
                text: "代理列表",
            }
        ];
        var width = this.props.width;
        width = (width-10)/3;
		return (
			<div>
                {/* <div className="marqueen">
                    <span className="marqueen-title">商城头条</span>
                    <div className="demo">
                        <ul>
                            <li><a target="_blank" href="#"><span>[特惠]</span>洋河年末大促，低至两件五折</a></li>
                            <li><a target="_blank" href="#"><span>[公告]</span>华北、华中部分地区配送延迟</a></li>
                            <li><a target="_blank" href="#"><span>[特惠]</span>家电狂欢千亿礼券 买1送1！</a></li>
                        </ul>
                    </div>
                </div> */}
                <div style={{ marginTop: 5, height: width }}>
                    <div className="middle-div1" style={{ width:width, height: width }}>
                        <div className="middle-p1">真的有鱼</div>
                        <div className="middle-p2">开年福利篇</div>
                        <img src={"http://b317.photo.store.qq.com/psb?/V11xyACC3J6TcN/5*m8TIaUVUx1NWHPWcVO6g5go.3fZoiaisp94gqP*KI!/b/dD0BAAAAAAAA&bo=IAMgAwAAAAARFyA!&rf=viewer_4"} className="middle1"/>
                    </div>
                    <div className="middle-div1" style={{ width:width, height: width, marginLeft: 5 }}>
                        <div className="middle-p1">囤货过冬</div>
                        <div className="middle-p2">让爱早回家</div>
                        <img src={"http://b398.photo.store.qq.com/psb?/V11xyACC3d3nEF/aaNl29KTXR2M1coocPcaBANuaU2RPYFZmCK5HU8PFjI!/m/dI4BAAAAAAAAnull&bo=7gLuAgAAAAARBzA!&rf=photolist&t=5"} className="middle1"/>
                    </div>
                    <div className="middle-div1" style={{ width:width, height: width, marginLeft: 5 }}>
                        <div className="middle-p1">浪漫情人节</div>
                        <div className="middle-p2">甜甜蜜蜜</div>
                        <img src={"http://m.qpic.cn/psb?/V11xyACC26L6BH/B.nsgSwcSuwLN5hjPa5RyA126MG1VdqBAiqB*bZQ9po!/b/dIUBAAAAAAAA&bo=fwF6AQAAAAARBzU!&rf=viewer_4"} className="middle1"/>
                    </div>
                </div>
                {/* <div style={{ padding: '5px 0' }} >
                    <Grid data={data1} square={false} columnNum={3} className="not-square-grid" onClick={(el, index)=>{this.toGrid(el, index)}}/>
                </div> */}
			</div>
		);
	}
}

export default connect(state => ({
    state: state.user
}), (dispatch) => ({
    actions: bindActionCreators(action.user, dispatch)
}))(Middle);