
import React, { Component } from 'react';
import { Drawer, NavBar, List, TabBar } from 'antd-mobile';
import {withRouter} from "react-router-dom";
import './drawer.css';
// import * as api from '../network/Api';
import * as cs from '../components/Constants';
import api from '../network';

var tab_data = [
    {
        "title": "首页",
        "key": "users",
        "to": "/player/home",
        "select_img": <span className="iconfont">&#xe607;</span>,
        "img": <span className="iconfont">&#xe608;</span>
    },
    {
        "title": "商城",
        "key": "consume",
        "to": "/wealth/home",
        "select_img": <span className="iconfont">&#xe617;</span>,
        "img": <span className="iconfont">&#xe616;</span>
    }
]

class Dashboard extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            is_login: false,
            selectedTab: tab_data[0].key,
            hidden: false
        };
    }
    componentWillMount() {
        const {location, history} = this.props;
        if(location.pathname !== "/login" && location.pathname !== "/"){
            this.isLogin();
        }
        history.push("/player/home")
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

    isLogin(){
        const {history} = this.props;
        // if(!api.getIsLogin()){
        //     history.push("/login")
        // }
    }

    render() {
        const {children, history, location} = this.props;
        var tabItem = (item, i) => {
            return(
                <TabBar.Item
                  style={{padding: '0', margin: '0'}}
                  icon={item.img}
                  selectedIcon={item.select_img}
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
        
        var is_bottom = api.getIsLogin();
        if(is_bottom){
            const pathname = location.pathname;
            const urlArr = pathname.split("/");
            var url = "";
            if(urlArr.length > 0){
                var url =urlArr[urlArr.length-1];
            }
            if(url !== "home"){
                is_bottom = false;
            }
        }
        
        var flag = cs.GetIsPC();
        var width = flag ? '100%' : "414px";
        var height = flag ? '100%' : "736px";
        // if(is_bottom){
            return(
                <center>
                    <div style={{position: 'fixed', height: height, width: width, margin: "auto"}}>
                        <TabBar
                        unselectedTintColor="#949494"
                        tintColor="#33A3F4"
                        barTintColor="white"
                        hidden={this.state.hidden}>
                        {tab_data.map(tabItem)}
                        </TabBar>
                    </div>
                </center>
            );
        // }else{
        //     return(
        //         <div style={{width: width, height: height, margin: "auto"}}>{children}</div>
        //     )
        // }
    }
};

export default withRouter(Dashboard);