//
// Author: leafsoar
// Date: 2017-07-25 15:39:45
// 

// Dashboard

import React, { Component } from 'react';
import { Drawer, NavBar, List, TabBar } from 'antd-mobile';
import {withRouter} from "react-router-dom";
import './drawer.css';


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
            open: false,
            selectedTab: tab_data[0].key,
            hidden: false,
            fullScreen: false,
        };
    }
    componentDidMount() {
        
    }
    onOpenChange = () => {
        
        // this.setState({ open: !this.state.open });
    }
    renderContent(pageText) {
    }

    leftContent(){
        if(this.state.selectedTab === "users"){
            return "我的玩家";
        }else if(this.state.selectedTab === "consume"){
            return "充值流水";
        }else if(this.state.selectedTab === "orders"){
            return "精品商城";
        }else if(this.state.selectedTab === "my"){
            return "我的";
        }
        return "";
    }

    rightContent(){
        if(this.state.selectedTab === "users"){
            return "我的玩家";
        }else if(this.state.selectedTab === "consume"){
            return "充值流水";
        }else if(this.state.selectedTab === "orders"){
            return "精品商城";
        }else if(this.state.selectedTab === "my"){
            return "设置";
        }
        return "";
    }
    render() {
        const {children, history} = this.props;
        var arr = new Array()
        arr.push(1)
        arr.push(2)
        const item = (item, i) => {
            return (
                <List.Item key={i}
                    thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                    multipleLine>
                    Category
                </List.Item>
            );
        }
        const sidebar = (
            <List>
                {arr.map(item)}
            </List>
        );
        var closeCollapsed = () => {
            // if(flag){
            //     setTimeout(()=>{
            //         this.setState({
            //             collapsed: true,
            //         });
            //     }, 100)
                
            // }
        }
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

        return(
            <div>
                <NavBar
                  mode="dark"
                  onLeftClick={this.onOpenChange}
                  leftContent = {this.leftContent()}
                  rightContent={this.rightContent()}>
                </NavBar>
                <Drawer
                  className="my-drawer"
                  touch={false}
                  dragToggleDistance={0}
                  style={{ minHeight: document.documentElement.clientHeight - 45 }}
                  enableDragHandle
                  sidebar={sidebar}
                  open={this.state.open}
                  onOpenChange={this.onOpenChange}>
                    <TabBar
                      unselectedTintColor="#949494"
                      tintColor="#33A3F4"
                      barTintColor="white"
                      hidden={this.state.hidden}>
                       {tab_data.map(tabItem)}
                    </TabBar>
                </Drawer>
                
            </div>
        );
    }
};

export default withRouter(Dashboard);