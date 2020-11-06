import React, { Component } from 'react';
import {Menu, Drawer} from 'antd'
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

import './sidenav.css'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

export default class SideNavBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            collapsed : true,
            visible:false,
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
            visible: !this.state.visible,
        });
    };
    showDrawer = () => {
        this.setState({
          visible: true,
        });
      };
    
    onClose = () => {
    this.setState({
        visible: false,
    });
    }; 
    
      render() {
        return (
            <>
            <Drawer
                title="MENU"
                placement="left"
                closable={false}
                onClose={this.onClose}
                visible={this.state.visible}
                getContainer={false}
                bodyStyle={{padding:"0"}}
                closeIcon={<CloseOutlined />}
                style={{ position: 'absolute', padding:'0'}}
                >
                <ul className='nav-menu'>
                    <li><a href='#' className={'nav-link'}><UserOutlined className={'nav-link-icon'}/>SKILLS</a></li>
                    <li><a href='#' className={'nav-link'}><LeftSquareOutlined className={'nav-link-icon'}/></a></li>
                    <li><a href='#' className={'nav-link'}><CheckSquareOutlined className={'nav-link-icon'}/></a></li>
                    <li><a href='#' className={'nav-link'}><DownloadOutlined className={'nav-link-icon'}/></a></li>
                    <li><a href='#' className={'nav-link'}><ControlOutlined className={'nav-link-icon'}/></a></li>
                    <li><a href='#' className={'nav-link'}><CodeOutlined className={'nav-link-icon'}/></a></li>
                    <li><a href='#' className={'nav-link'}><PhoneOutlined className={'nav-link-icon'}/></a></li>
                    <li><a href='#' className={'nav-link'}><ContainerOutlined className={'nav-link-icon'}/></a></li>
                    <li><a href='#' className={'nav-link'}><MediumOutlined className={'nav-link-icon'}/></a></li>
                    <li><a href='#' className={'nav-link'}><CrownOutlined className={'nav-link-icon'}/></a></li>
                    <li><a href='#' className={'nav-link'}><TeamOutlined className={'nav-link-icon'}/></a></li>
                    <li><a href='#' className={'nav-link'}><FileOutlined className={'nav-link-icon'}/></a></li>
                </ul>
            </Drawer>
            <Sider width={50} trigger={null} style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                backgroundColor:"grey"
              }}>
                  
                <ul className='nav-menu'>
                    <li><a href='#' className={'nav-link'}><BarsOutlined className={'nav-link-icon'}  onClick={()=>{this.toggle(); this.showDrawer()} }/></a></li>
                    <li><a href='#' className={'nav-link'}><UserOutlined className={'nav-link-icon'}/></a></li>
                    <li><a href='#' className={'nav-link'}><LeftSquareOutlined className={'nav-link-icon'}/></a></li>
                    <li><a href='#' className={'nav-link'}><ControlOutlined className={'nav-link-icon'}/></a></li>
                    <li><a href='#' className={'nav-link'}><CodeOutlined className={'nav-link-icon'}/></a></li>
                    <li><a href='#' className={'nav-link'}><PhoneOutlined className={'nav-link-icon'}/></a></li>
                    <li><a href='#' className={'nav-link'}><ContainerOutlined className={'nav-link-icon'}/></a></li>
                    <li><a href='#' className={'nav-link'}><MediumOutlined className={'nav-link-icon'}/></a></li>
                    <li><a href='#' className={'nav-link'}><CrownOutlined className={'nav-link-icon'}/></a></li>
                    <li><a href='#' className={'nav-link'}><FileOutlined className={'nav-link-icon'}/></a></li>
                    <li><a href='#' className={'nav-link'}><CheckSquareOutlined className={'nav-link-icon'}/></a></li>
                    <li><a href='#' className={'nav-link'}><TeamOutlined className={'nav-link-icon'}/></a></li>                    
                    <li><a href='#' className={'nav-link'}><DownloadOutlined className={'nav-link-icon'}/></a></li>
                </ul>
            </Sider>
            </>
        );
      }
}