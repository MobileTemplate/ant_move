//
// Author: zhongyu
// 

// 用户信息

import React, { Component } from 'react';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import action from '../../../actions';

import TopBar from '../../comm/TopBar';

import { List, Icon, Grid } from 'antd-mobile';

const Item = List.Item;
var self = this;
const data = [
	{
		img: "",
		name: "肉类"
	},
	{
		img: "",
		name: "糖类"
	},
	{
		img: "",
		name: "饼干糕点"
	},
	{
		img: "",
		name: "海产类"
	},
	{
		img: "",
		name: "果干果脯类"
	},
	{
		img: "",
		name: "冻干水果类"
	},
	{
		img: "",
		name: "坚果类"
	},
	{
		img: "",
		name: "养生类"
	},
	{
		img: "",
		name: "礼盒类"
	},
	{
		img: "",
		name: "特价产品"
	}
];

const dataarr = Array.from(new Array(9)).map((_val, i) => ({
	icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
	text: `肉类${i}`,
}));

class Home extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			open: false,
			name: "肉类",
			dataarr: dataarr
		}
	}
	
	componentDidMount() {
		self = this;
	
	}
	onOpenChange(name){
		const dataarr = Array.from(new Array(9)).map((_val, i) => ({
			icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
			text: name+`${i}`,
		}));
		this.setState({ open: !this.state.open, name: name, dataarr: dataarr});
	}
	render() {
		const sidebar = (<List>
			{data.map((item, index) => {
			  return (<List.Item key={index} onClick={()=>{this.onOpenChange(item.name)}}
				thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
			  >{item.name}</List.Item>);
			})}
		</List>);
		return (
			<div>
				<TopBar
				  title={this.state.name}
				  heigth={95}
				  leftContent = {<Icon type="ellipsis" />}
				  onLeftClick={()=>{this.onOpenChange(this.state.name)}}
				  sidebar={sidebar}
				  open={this.state.open}
				  content = { 
					<div>
						<Grid data={this.state.dataarr} activeStyle={false} onClick={_el => console.log(_el)}/>
					</div>
				  }/>
			</div>
			
		);
	}
}

export default connect(state => ({
    state: state.user
}), (dispatch) => ({
    actions: bindActionCreators(action.user, dispatch)
}))(Home);
