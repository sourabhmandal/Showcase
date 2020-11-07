import React, { Component } from 'react';
import {Menu, Drawer, List} from 'antd'
import {BarsOutlined} from '@ant-design/icons';
import {navData} from '../Database/NavbarData'

export default class TopNavBar extends Component{
    constructor(props){
        super(props);
        this.state={
            show : false,
        }
        this.showDrawer = this.showDrawer.bind(this);
        this.onClose = this.onClose.bind(this);
    }
    showDrawer = () => {
        this.setState({
          show: true,
        });
        console.log("SHOW:", this.state.show)
    };
    
    onClose = () => {
        this.setState({
            show: false
        });
        console.log("DONT SHOW:", this.state.show)
    }; 
    render(){
        return(
            <>
            <Drawer
                placement="left"
                closable={true}
                onClose={this.onClose}
                visible={this.state.show}
                
            >
                <List
                    bordered={false}
                    dataSource={navData}
                    renderItem={item => (
                    <List.Item> {item.icon} {item.title}</List.Item>
                    )}></List>
            </Drawer>
            <Menu mode="horizontal">
                <Menu.Item key="mail" onClick={this.showDrawer} icon={<BarsOutlined />}>
                    MENU
                </Menu.Item>
            </Menu>
            </>
        )
    }
}