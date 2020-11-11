import React, { Component } from 'react';
import { Affix, Menu, Layout} from 'antd';
import axios from 'axios'
import {navData} from '../Database/NavbarData'
import {
    BarsOutlined,
    DownloadOutlined,
    PhoneOutlined,
  } from '@ant-design/icons';
import './sidenav.css'


const {Sider} = Layout;
const { SubMenu } = Menu;


export default class SideNavBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            current : "SubMenu",
            isLoaded : false,
            navTabs: []
        }
        
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        axios.get('http://sourabhmandal.pythonanywhere.com/navtabs/')
        .then(json =>{
            this.setState({
                isLoaded : true,
                navTabs : json.data,
            })
            console.log("FETCH DATA",this.state.navTabs)
        })   
    }
    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };
    
    
      render() {
        return (
            <>
            <Affix offsetTop={0}>
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <SubMenu key="SubMenu" icon={<BarsOutlined />} title="MENU">
                    <Menu.ItemGroup>
                        {this.state.navTabs.map( (item)=>{
                            return(
                                <Menu.Item key={item.id}>
                                    <a href={item.nav_link}>{item.nav_name}</a>
                                </Menu.Item>
                            )
                        })}
                    </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="app" icon={<PhoneOutlined />}>
                    Contact Me
                </Menu.Item>
                
                <Menu.Item key="alipay" icon={<DownloadOutlined />}>
                    <a href="#" rel="noopener noreferrer">
                        Download Resume
                    </a>
                </Menu.Item>
            </Menu>
            </Affix>
            </>
        );
      }
}