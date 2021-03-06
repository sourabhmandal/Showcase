import React, { Component } from 'react';
import { Affix, Menu, Modal, Tag} from 'antd';
import axios from 'axios'
import { Link } from "react-scroll";
import {
    BarsOutlined,
    DownloadOutlined,
    PhoneOutlined,
    GithubOutlined,
    LinkedinOutlined,
    MediumOutlined,
    FacebookOutlined
  } from '@ant-design/icons';

const { SubMenu } = Menu;


export default class SideNavBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            current : "SubMenu",
            isLoaded : false,
            navTabs: [],
            links: []
        }
        
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        axios.get('https://sourabhmandal.pythonanywhere.com/navtabs/')
        .then(json =>{
            this.setState({
                isLoaded : true,
                navTabs : json.data,
                visible: false,
            })
            console.log("MENU NAV DATA",this.state.navTabs)
        })
        axios.get('https://sourabhmandal.pythonanywhere.com/links/')
        .then(json =>{
            this.setState({
                isLoaded : true,
                links : json.data,
                visible: false,
            })
            console.log("MENU NAV DATA",this.state.links)
        })
    }
    handleClick = e => {
        this.setState({ current: e.key });
    };
    
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
        visible: false,
        });
    };
    
    render() {
    return (
        <>
        <Modal title="Contact"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            width={"40rem"}
        >
        
            <div>
                <a href="https://www.github.com/sourabhmandal"><Tag color="purple"><GithubOutlined style={{fontSize:"3rem", padding:"1rem", margin:"1rem"}}/></Tag></a>
                <a href="https://www.linkedin.com/in/sourabh-mandal-ait/"><Tag color="blue"><LinkedinOutlined style={{fontSize:"3rem", padding:"1rem", margin:"1rem"}}/></Tag></a>
                <a href="https://medium.com/@19mandal97"><Tag color="black"><MediumOutlined style={{fontSize:"3rem", padding:"1rem", margin:"1rem"}}/></Tag></a>
                <a href="https://www.facebook.com/sourabh.mandal.97/"><Tag color="geekblue"><FacebookOutlined style={{fontSize:"3rem", padding:"1rem", margin:"1rem"}}/></Tag></a>
            </div>
            
        
        </Modal>

        <Affix offsetTop={0}>
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
            <SubMenu key="SubMenu" icon={<BarsOutlined />} title="MENU">
                <Menu.ItemGroup>
                    {this.state.navTabs.map( (item)=>{
                        return(
                            <Menu.Item key={item.id}>
                                <Link smooth={true} to={item.nav_link}>{item.nav_name}</Link>
                            </Menu.Item>
                        ) 
                    })}
                </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key="contact" icon={<PhoneOutlined />} onClick={this.showModal}>
                Contact Me
            </Menu.Item>
            
            <Menu.Item key="resume" icon={<DownloadOutlined />}>
                <a href="https://drive.google.com/file/d/1wAIFr_5ijiaNrfyPCFfE1S9ByeFy0DUe/view" rel="noopener noreferrer">
                    Download Resume
                </a>
            </Menu.Item>
        </Menu>
        </Affix>
        </>
    );
    }
}