import React, { Component } from 'react'
import {Typography, Divider, Tag} from 'antd'
import './maintext.css'
import HeroImage from './HeroImage'
import {GithubOutlined, LinkedinOutlined, MediumOutlined, FacebookOutlined} from '@ant-design/icons'
export default class MainText extends Component{
    render(){
        return(
            <>
            <div className={"discription"} style={{paddingLeft:"5rem"}} >
              <Divider orientation="left">Hi, My name is</Divider>
              <Typography.Title style={{fontSize:"7vw",margin:"0"}}>Sourabh Mandal</Typography.Title>
              <Typography.Title  style={{ fontSize:"3vw"}} level={2}>I am an Open Source Contributor</Typography.Title>
              <Typography.Paragraph strong={true}>I'm a software engineering student based in Pune, IN
              <br/> good with building solutions, fast prototyping and everything in between.
              <br/>Fuel with passion to give back to society</Typography.Paragraph>
              <Divider orientation="left"><strong>Connect With Me</strong></Divider>
              <a href="#"><Tag color="purple"><GithubOutlined style={{fontSize:"1.5rem", padding:"0.5rem"}}/></Tag></a>
              <a href="#"><Tag color="blue"><LinkedinOutlined style={{fontSize:"1.5rem", padding:"0.5rem"}}/></Tag></a>
              <a href="#"><Tag color="black"><MediumOutlined style={{fontSize:"1.5rem", padding:"0.5rem"}}/></Tag></a>
              <a href="#"><Tag color="geekblue"><FacebookOutlined style={{fontSize:"1.5rem", padding:"0.5rem"}}/></Tag></a>
            </div>
            </>
        )
    }
}