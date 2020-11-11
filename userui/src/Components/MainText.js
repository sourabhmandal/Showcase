import React, { Component } from 'react'
import {Typography, Divider, Tag} from 'antd'
import './maintext.css'
import {GithubOutlined, LinkedinOutlined, MediumOutlined, FacebookOutlined} from '@ant-design/icons'
import axios from 'axios'
export default class MainText extends Component{
    constructor(props){
        super(props);
        this.state = {
            current : "SubMenu",
            isLoaded : false,
            introData: {},
            linkData: []
        }
        
    }
    componentDidMount(){
        axios.get('http://sourabhmandal.pythonanywhere.com/intro/')
        .then(json =>{
            this.setState({
                isLoaded : false,
                introData : json.data[0],
            })
            console.log("MAIN TEXT DATA",this.state.introData)
        })
        axios.get('http://sourabhmandal.pythonanywhere.com/links/')
        .then(json =>{
            this.setState({
                isLoaded : true,
                linkData : json.data,
            })
            console.log("SOCIAL LINK DATA",this.state.linkData)
        })   
    }
    render(){
        return(
            <>
            <div className={"discription"} style={{padding:"0% 13%"}} >
                <Divider orientation="left">Hi, My name is</Divider>
                <Typography.Title className="h1 rainbow-text">{this.state.introData.name}</Typography.Title>
                <Typography.Title  style={{ fontSize:"3vw"}} level={2}>I am an <b style={{backgroundColor:"purple", color:"whitesmoke", padding:"0.1rem 1rem"}}>{this.state.introData.designation}</b></Typography.Title>
                <Typography.Paragraph strong={true}>{this.state.introData.description}</Typography.Paragraph>
                <Divider orientation="left"><strong>Connect With Me</strong></Divider>
                <a href='https://github.com/sourabhmandal/'><Tag color="purple"><GithubOutlined style={{fontSize:"1.5rem", padding:"0.5rem"}}/></Tag></a>
                <a href="https://www.linkedin.com/in/sourabh-mandal-ait/"><Tag color="blue"><LinkedinOutlined style={{fontSize:"1.5rem", padding:"0.5rem"}}/></Tag></a>
                <a href="https://medium.com/@19mandal97"><Tag color="black"><MediumOutlined style={{fontSize:"1.5rem", padding:"0.5rem"}}/></Tag></a>
                <a href="https://www.facebook.com/sourabh.mandal.97/"><Tag color="geekblue"><FacebookOutlined style={{fontSize:"1.5rem", padding:"0.5rem"}}/></Tag></a>
              
            </div>
            </>
        )
    }
}