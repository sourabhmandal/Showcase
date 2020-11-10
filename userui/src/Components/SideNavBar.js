import React, { Component } from 'react';
import {Menu, Drawer, List} from 'antd'
import axios from 'axios'
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
const {Sider} = Layout;

export default class SideNavBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            show : false,
            isLoaded : false,
            navTabs: []
        }
        
        this.showDrawer = this.showDrawer.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/navtabs/')
        .then(json =>{
            console.log("FETCH DATA" , json.data)
            this.setState({
                isLoaded : true,
                navTabs : json,
            })
        })
        
    }

    showDrawer = () => {
        this.setState({
          show: true,
        });
    };
    
    onClose = () => {
        this.setState({
            show: false
        });
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
                    dataSource={this.state.navTabs}
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
                    
                    {this.state.navTabs.map((item) => {
                        return(
                            <Menu.Item key={item.id} icon={item.icon}  title={item.title}></Menu.Item>
                        )
                    })}
                </Menu>
            </Sider>
            </>
        );
      }
}