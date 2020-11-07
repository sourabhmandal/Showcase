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
        });
        console.log(this.state.collapsed)
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
            <Sider width={this.state.collapsed?60 : 200} trigger={null} style={{ overflow: 'auto', height: '100vh',
                position: 'fixed', left: 0, backgroundColor:"#fff"}}>
                <Menu mode="inline" defaultSelectedKeys={['1']}
                    inlineCollapsed={this.state.collapsed} style={{height: '100vh'}}>
                    <Menu.Item key="1" icon={<BarsOutlined/>} onClick={()=>{this.toggle();}} title={"MENU"}>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<UserOutlined />}  title={"ABOUT ME"}>
                        {this.state.collapsed ? null : "ABOUT ME"}
                    </Menu.Item>
                    <Menu.Item key="3" icon={<LeftSquareOutlined />}  title={"PROJECTS"}>
                    {this.state.collapsed ? null : "PROJECTS"}
                    </Menu.Item>
                </Menu>
            </Sider>
            </>
        );
      }
}
/*<ul className='nav-menu'>
                    <li><a href='#' className={'nav-link'}></li>
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
                </ul> */