import React, { Component } from 'react';
import {Menu, Drawer, List, Affix} from 'antd'
import {BarsOutlined} from '@ant-design/icons';
import { Link } from "react-scroll";
import axios from 'axios';
export default class MobileNavBar extends Component{
    constructor(props){
        super(props);
        this.state={
            show : false,
            isLoaded : false,
            navTabs: [],
        }
        this.showDrawer = this.showDrawer.bind(this);
        this.onClose = this.onClose.bind(this);
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

    componentDidMount(){
        axios.get('https://sourabhmandal.pythonanywhere.com/navtabs/')
        .then(json =>{
            this.setState({
                isLoaded : true,
                navTabs : json.data,
                visible: false,
            })
            console.log("Mobile MENU NAV DATA",this.state.navTabs)
        })
    }
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
                    dataSource={this.state.navTabs}
                    renderItem={item => (
                    <List.Item><Link to={item.nav_link} smooth={true} onClick={this.onClose}>{item.nav_name}</Link></List.Item>
                    )}></List>
            </Drawer>
            <Affix offsetTop={0}>
            <Menu mode="horizontal">
                <Menu.Item key="mail" onClick={this.showDrawer} icon={<BarsOutlined />}>
                    MENU
                </Menu.Item>
            </Menu>
            </Affix>
            </>
        )
    }
}