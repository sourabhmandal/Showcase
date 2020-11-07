import React, { Component } from 'react'
import { List } from 'antd';
import { FileDoneOutlined } from "@ant-design/icons";

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];
export default class Courses extends Component{
    render(){
        return(
            <>
                <List
                    size="large"
                    bordered={false}
                    dataSource={data}
                    renderItem={item => <List.Item><FileDoneOutlined style={{paddingRight:"1rem", fontSize:"1.2rem"}}/>{item}</List.Item>}
                    />
            </>
        )
    }
}