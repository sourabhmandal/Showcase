import React, { Component } from 'react';
import {Menu, Drawer, List} from 'antd'
import {
    BarsOutlined,
    LeftSquareOutlined,
    UserOutlined,
    CheckSquareOutlined,
    DownloadOutlined,
    ControlOutlined,
    CodeOutlined,
    PhoneOutlined,
    ContainerOutlined,
    MediumOutlined,
    CrownOutlined,
    TeamOutlined,
    FileOutlined,
    CloseOutlined,
  } from '@ant-design/icons';

import {navData} from '../Database/NavbarData'

import './sidenav.css'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

export default class SideNavBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            show : false
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
    
      render() {
        return (
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
                
            <Sider width={60} trigger={null} style={{ overflow: 'auto', height: '100vh',
                position: 'fixed', left: 0, backgroundColor:"#fff"}}>
                <Menu mode="inline" defaultSelectedKeys={['1']}
                    inlineCollapsed={this.state.collapsed} style={{height: '100vh'}}>
                    <Menu.Item key="0" icon={<BarsOutlined/>} onClick={this.showDrawer} title={"MENU"}>
                    </Menu.Item>
                    
                    {navData.map((item) => {
                        return(
                            <Menu.Item key={item.key} icon={item.icon}  title={item.title}></Menu.Item>
                        )
                    })}
                </Menu>
            </Sider>
            </>
        );
      }
}