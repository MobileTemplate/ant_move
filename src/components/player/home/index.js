
//
// Author: leafsoar
// Date: 2017-07-25 15:01:45
// 

// 用户信息

import React, { Component } from 'react';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import action from '../../../actions';

import { WhiteSpace, NavBar, Drawer, Popover, Icon } from 'antd-mobile';

import Head from './Head';
import Middle from './Middle';
import Bottom from './Bottom';
import Contest from './Contest';
import TheBottom from './TheBottom';
import TopBar from '../../comm/TopBar';
import * as cs from '../../Constants'
// import PopoverView from './Popover';

import './home.css';

const Item = Popover.Item;

class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        	visible: false,
			selected: '',
        };
    }
    componentDidMount() {

    }

	render() {
		return (
			<div>
				<TopBar
				  heigth={95}
				  leftContent = {"首页"}
				  rightContent={this.PopoverView()}
				  content = {
					<div>
						<Head history={this.props.history} width={cs.GetWidth()} height={cs.GetHeight()}/>
						<Middle history={this.props.history} width={cs.GetWidth()} height={cs.GetHeight()}/>
						<WhiteSpace size="sm"/>
						<Contest history={this.props.history} width={cs.GetWidth()} height={cs.GetHeight()}/>
						<WhiteSpace size="sm"/>
						<Bottom history={this.props.history} width={cs.GetWidth()} height={cs.GetHeight()} data={{
							sj1: {
								name: "开抢啦！",
								money: "零食大礼包",
								img: require("./img/tj.png")
							},
							sj2: {
								name: "天椒麻辣牛肉条",
								money: "¥18",
								img: require("./img/tj.png")
							}
						}}/>
						<WhiteSpace size="sm"/>
						<TheBottom history={this.props.history} width={cs.GetWidth()} height={cs.GetHeight()} data={{
							sj1: {
								name: "开抢啦！",
								money: "零食大礼包",
								img: require("./img/tj.png")
							},
							sj2: {
								name: "天椒麻辣牛肉条",
								money: "¥18",
								img: require("./img/tj.png")
							}
						}}/>
					</div>
				  }/>
			</div>
		);
	}

	PopoverView(){
		const onSelect = (opt) => {
			this.setState({
				visible: false,
				selected: opt.props.value,
			});
			console.log(opt.props.value);
		};
		const handleVisibleChange = (visible) => {
			this.setState({
				visible,
			});
		};
		const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
		return(
			<Popover mask
              overlayClassName="fortest"
              overlayStyle={{ color: 'currentColor' }}
              visible={this.state.visible}
              overlay={[
				(<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">扫一扫</Item>),
				(<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>我的二维码</Item>),
				(<Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}><span style={{ marginRight: 5 }}>帮助</span></Item>),
			  ]}
			  align={{
				overflow: { adjustY: 0, adjustX: 0 },
				offset: [-10, 0],
			  }}
			  onVisibleChange={()=>{handleVisibleChange}}
			  onSelect={onSelect}>
				<div style={{
				  height: '100%',
				  padding: '0 15px',
				  marginRight: '-15px',
				  display: 'flex',
				  alignItems: 'center',
				}}>
					<Icon type="ellipsis" />
				</div>
			</Popover>
		)
	}
}

export default Home;