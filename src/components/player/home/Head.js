
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

class Head extends Component {
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
		const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
        var cItem = (item, i) => {
            return(
                <a href="#" key={i} style={hProp}>
                    <img
                      src={require(`./img/tou_${i+1}.jpg`)}
                      alt=""
                      style={{width: '100%', height: "150px"}}
                      onLoad={() => {
                        window.dispatchEvent(new Event('resize'));
                        this.setState({
                            initialHeight: null,
                        });
                    }}/>
                </a>
            )
        }
		return (
			<div>
			 	<Carousel
                  className="my-carousel"
                  autoplay={false}
                  infinite
                  autoplay
                  style={{height: '150px'}}
                  selectedIndex={1}
                  swipeSpeed={35}
                  beforeChange={(from, to) => {}}
                  afterChange={(index) => {}}>
                    {this.state.data.map(cItem)}
                </Carousel>
			</div>
		);
	}
}

export default connect(state => ({
    state: state.user
}), (dispatch) => ({
    actions: bindActionCreators(action.user, dispatch)
}))(Head);