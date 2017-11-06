//
// Author: leafsoar
// Date: 2017-07-25 14:56:15
//

// 登录界面

import React, { Component } from 'react';
import { List, Switch, Card, InputItem, WingBlank, WhiteSpace, Button, Tabs } from 'antd-mobile';
import { createForm } from 'rc-form';
import './login.css'

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import action from '../actions';
import api from '../network';
// antd
const Item = List.Item;

class Login extends Component {
	componentDidMount() {
        const {actions} = this.props;
        actions.getJson();
    }
    login(data) {
        const {actions, state} = this.props;
        this.setState({color: "black", type: null});
        api.setHost(state.json.agent_api);
        actions.UserLogin(data, (succeed, data) => {
            if (!succeed) {
                this.setState({color: "red", type: data});
            } else {
                this.checkLoginAndJump();
            }
        });
    }

    checkLoginAndJump() {
        const {state, history, actions} = this.props;
        const {token, single} = state;
        if (token != null && single == null) {
            api.setToken(token.token);
            actions.getUser(token.uid);
            history.push('/player');
        }
    }
	render() {
		const tabs = [
		  	{ title: '账号登录' },
		  	{ title: '短信验证码登录' },
		];
		setTimeout(() => {
            this.checkLoginAndJump()
        }, 10);
		return (
			<div className="loginDiv">
				<WingBlank>
					<img src={"http://uushare.qianuuu.com/qyqp/images/app.png"} className="loginImg"/>
					<br/>
					<WhiteSpace size="xl"/>
					<div  className="loginlist">
						<Tabs initialPage={0} tabs={tabs}>
							<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: 200, width: "100%"}}>
			                	<LoginPassForm callback={(data)=>{
			                		this.login(data)
			                	}}/>
	   						</div>
					    	<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: 200}}>
			                	<LoginNoteForm/>
					    	</div>
					    </Tabs>
				    </div>
			    </WingBlank>
			</div>
		);
	}
}

// 用户密码登录
class LoginPass extends Component {
	onSubmit = () => {
	    this.props.form.validateFields({ force: true }, (error) => {
	      	if (!error) {
	      		var data = this.props.form.getFieldsValue();
	      		this.props.callback(data);
	      	} else {
	        	alert('用户账号和用户密码有误！');
	      	}
	    });
  	}
  	validateAccount = (rule, value, callback) => {
	    if (value && value.length > 5) {
	      	callback();
	    } else {
	      	callback(new Error('用户账号有误'));
	    }
  	}
	render(){
		const { getFieldProps, getFieldError } = this.props.form;
		return(
			<form style={{width: "90%"}}>
				<WhiteSpace/>
				<InputItem
				  {...getFieldProps('username', {
					rules: [
						{ required: true, message: '请输入用户账号' },
						{ validator: this.validateAccount },
					],
				  })}
				  clear
				  error={!!getFieldError('account')}
				  onErrorClick={() => {
					alert(getFieldError('account').join('、'));
				  }}
				  
				  placeholder="手机号/用户账号"/>
				<WhiteSpace/>
				<InputItem {...getFieldProps('userpass', {
					rules: [
						{ required: true, message: '请输入密码'},
					],
				  })}
				  error={!!getFieldError('password')}
				  onErrorClick={() => {
					alert(getFieldError('password').join('、'));
				  }}
				  placeholder="请输入密码" type="password"/>
				<WhiteSpace/>
				<WhiteSpace/>
				<Button type="primary" className="loginBtn" size="small" inline onClick={this.onSubmit}>登 录</Button>
	   		</form>
		)
	}
}
const LoginPassForm = createForm()(LoginPass);


// 用户短信登录
class LoginNote extends Component {
	onSubmit = () => {
	    this.props.form.validateFields({ force: true }, (error) => {
	      	if (!error) {
	        	console.log(this.props.form.getFieldsValue());
	      	} else {
	        	alert('手机号码和验证码有误！');
	      	}
	    });
  	}
  	validateAccount = (rule, value, callback) => {
	    if (value && value.length === 11) {
	      	callback();
	    } else {
	      	callback(new Error('手机号码输入有误'));
	    }
  	}
	render(){
		const {getFieldProps, getFieldError} = this.props.form;
		return(
			<form style={{width: "90%"}}>
				<WhiteSpace/>
				<InputItem
				  {...getFieldProps('account', {
					rules: [
						{ required: true, message: '请输入手机号码' },
						{ validator: this.validateAccount },
					],
				  })}
				  clear
				  error={!!getFieldError('account')}
				  onErrorClick={() => {
					alert(getFieldError('account').join('、'));
				  }}
				  
				  placeholder="手机号/用户账号"/>
				<WhiteSpace/>
				<InputItem {...getFieldProps('password', {
					rules: [
						{ required: true, message: '请输入验证码' },
					],
				  })}
				  error={!!getFieldError('password')}
				  onErrorClick={() => {
					alert(getFieldError('password').join('、'));
				  }}
				  placeholder="请输入验证码" type="password"/>
				<WhiteSpace/>
				<WhiteSpace/>
				<Button type="primary" className="loginBtn" size="small" inline onClick={this.onSubmit}>登 录</Button>
	   		</form>
		)
	}
}

const LoginNoteForm = createForm()(LoginNote);

export default connect(state => ({
    state: state.user
}), (dispatch) => ({
    actions: bindActionCreators(action.user, dispatch)
}))(Login);
