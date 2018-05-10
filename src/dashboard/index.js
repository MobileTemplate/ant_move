//
// Author: leafsoar
// Date: 2017-07-25 15:39:45
// 

// Dashboard

import React, { Component } from 'react';
import { Drawer, NavBar, List, TabBar } from 'antd-mobile';
import {withRouter} from "react-router-dom";
import './drawer.css';
import api from '../network';

var tab_data = [
    {
        "title": "我的玩家",
        "key": "users",
        "to": "/player",
        "select_img": "https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg",
        "img": "https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg"
    },
    {
        "title": "充值流水",
        "key": "consume",
        "to": "/login",
        "select_img": "https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg",
        "img": "https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg"
    },
    {
        "title": "精品商城",
        "key": "orders",
        "to": "/order/info",
        "select_img": "https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg",
        "img": "https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg"
    },
    
    {
        "title": "个人信息",
        "key": "my",
        "to": "/my",
        "select_img": "https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg",
        "img": "https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg"
    }
]

class Dashboard extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            token: false,
            selectedTab: tab_data[0].key,
            hidden: false
        };
    }
    componentDidMount() {
        const {location, history} = this.props;
        if(api.getToken() != null && api.getToken() != ""){
            this.setState({
                token: true
            })
        }
    }


    // 判断平台端
    IsPC() {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone", "SymbianOS"];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return !flag;
    }
    render() {
        const {children, history} = this.props;
        var tabItem = (item, i) => {
            return(
                <TabBar.Item
                  style={{padding: '0', margin: '0'}}
                  icon={{ uri: item.img }}
                  selectedIcon={{ uri: item.select_img }}
                  title={item.title}
                  key={item.key}
                  selected={this.state.selectedTab === item.key}
                  onPress={() => {
                    history.push(item.to)
                    this.setState({
                        selectedTab: item.key,
                    });
                  }}>
                  {children}
                </TabBar.Item>
            )
        }
        var flag = this.IsPC();
        if(!this.state.token || (api.getToken() != null && api.getToken() != "") ){
            return(
                <div style={{position: 'fixed', height: '100%', width: '100%', top: 0}}>
                    <TabBar
                      unselectedTintColor="#949494"
                      tintColor="#33A3F4"
                      barTintColor="white"
                      hidden={this.state.hidden}>
                       {tab_data.map(tabItem)}
                    </TabBar>
                </div>
            );
        }else{
            return(
                <div style={{width: flag ? '100%' : "414px", height: flag ? '100%' : "736px", margin: "auto"}}>{children}</div>
            )
        }
    }
};

export default withRouter(Dashboard);