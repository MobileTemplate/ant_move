//
// Author: leafsoar
// Date: 2017-07-25 15:01:45
// 

// 用户信息

import React, { Component } from 'react';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Carousel } from 'antd-mobile';
import action from '../../actions';

class UserList extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: ['', '', ''],
            initialHeight: 176,
        };
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 10);
    }
	
	render() {
		var {state} = this.props;
		var {login} = state;
        const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
		return (
			<div>
			 	<Carousel
                  className="my-carousel"
                  autoplay={false}
                  infinite
                  selectedIndex={1}
                  swipeSpeed={35}
                  beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                  afterChange={index => console.log('slide to', index)}>
                    {this.state.data.map(ii => (
                        <a href="http://www.baidu.com" key={ii} style={hProp}>
                            <img
                              src={`https://zos.alipayobjects.com/rmsportal/${ii}.png`}
                              alt=""
                              onLoad={() => {
                                window.dispatchEvent(new Event('resize'));
                                this.setState({
                                    initialHeight: null,
                                });
                              }}/>
                        </a>
                    ))}
                </Carousel>
			</div>
		);
	}
}

export default connect(state => ({
    state: state.user
}), (dispatch) => ({
    actions: bindActionCreators(action.user, dispatch)
}))(UserList);