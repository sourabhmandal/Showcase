import React, { Component } from 'react'
import {Typography} from 'antd'
export default class MainText extends Component{
    render(){
        return(
            <div className={"discription"} style={{padding:"2rem"}}>
              <Typography.Paragraph style={{color:"aliceblue"}}>Hi, My name is</Typography.Paragraph>
              <Typography.Title style={{color:"aliceblue" , fontSize:"7vw",margin:"0"}}>Sourabh Mandal</Typography.Title>
              <Typography.Title  style={{color:"aliceblue", fontSize:"3vw"}} level={2}>I am an Open Source Contributor</Typography.Title>
              <Typography.Paragraph style={{color:"aliceblue"}} strong={true}>I'm a software engineering student based in Pune, IN
              <br/> good with fast prototyping a solution,
              <br/>and everything in between.</Typography.Paragraph>
            </div>
        )
    }
}