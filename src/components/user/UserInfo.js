//
// Author: leafsoar
// Date: 2017-07-25 15:01:45
// 

// 用户信息

import React, { Component } from 'react';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import action from '../../actions';

class UserInfo extends Component {

    componentDidMount() {
        const {actions, state} = this.props;
        actions.userLogin({test: "test1"});
    }
	
	render() {
		var {state} = this.props;
		var {login} = state;
		return (
			<div>
			  <h2>UserInfo {login.test}</h2>
			</div>
		);
	}
}

export default connect(state => ({
    state: state.user
}), (dispatch) => ({
    actions: bindActionCreators(action.user, dispatch)
}))(UserInfo);
