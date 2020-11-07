import React, { Component } from 'react';
import {Menu} from 'antd'
import {BarsOutlined} from '@ant-design/icons';

export default class TopNavBar extends Component{
    render(){
        return(
            <>
            <Menu mode="horizontal">
                <Menu.Item key="mail" icon={<BarsOutlined />}>
                    Menu
                </Menu.Item>
            </Menu>
            </>
        )
    }
}