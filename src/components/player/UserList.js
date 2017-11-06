//
// Author: leafsoar
// Date: 2017-07-25 14:56:15
//

// 用户信息列表界面

import React, { Component } from 'react';
import { Accordion, List, SearchBar, WhiteSpace } from 'antd-mobile';
import './player.css';

class UserList extends React.Component {
    onChange = (key) => {
        console.log(key);
    }
    render() {
        return (
            <div>
                <SearchBar placeholder="搜索" maxLength={8} style={{backgroundColor: "#fff", borderColor: "#f5f5f5", color:"#6699ee"}}  maxLength={10}/>
                <WhiteSpace/>
                <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange} extra={"20000"}>
                    <Accordion.Panel header="一级玩家">
                        <List className="my-list">
                            <List.Item arrow="empty"
                              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                              multipleLine
                              extra={"20000"}>
                                张一
                            </List.Item>
                            <List.Item arrow="empty"
                              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                              multipleLine
                              extra={"20000"}>张二</List.Item>
                            <List.Item arrow="empty"
                              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                              multipleLine
                              extra={"20000"}>张三</List.Item>
                        </List>
                    </Accordion.Panel>
                    <Accordion.Panel header="二级玩家" className="pad">
                        <List className="my-list">
                            <List.Item arrow="empty"
                              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                              multipleLine
                              extra={"20000"}>李一</List.Item>
                            <List.Item arrow="empty"
                              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                              multipleLine
                              extra={"20000"}>李二</List.Item>
                            <List.Item arrow="empty"
                              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                              multipleLine
                              extra={"20000"}>李三</List.Item>
                            <List.Item arrow="empty"
                              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                              multipleLine
                              extra={"20000"}>李四</List.Item>
                        </List>
                    </Accordion.Panel>
                    <Accordion.Panel header="多级玩家" className="pad">
                        <List className="my-list">
                            <List.Item arrow="empty"
                              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                              multipleLine
                              extra={"20000"}>王一</List.Item>
                            <List.Item arrow="empty"
                              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                              multipleLine
                              extra={"20000"}>王二</List.Item>
                            <List.Item arrow="empty"
                              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                              multipleLine
                              extra={"20000"}>王三</List.Item>
                            <List.Item arrow="empty"
                              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                              multipleLine
                              extra={"20000"}>王四</List.Item>
                            <List.Item arrow="empty"
                              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                              multipleLine
                              extra={"20000"}>王五</List.Item>
                            <List.Item arrow="empty"
                              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                              multipleLine
                              extra={"20000"}>王二麻子</List.Item>
                        </List>
                    </Accordion.Panel>
                </Accordion>
            </div>
        );
    }
}

export default UserList