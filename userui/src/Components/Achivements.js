import React, { Component } from 'react'
import { List } from 'antd';
import { TrophyOutlined } from "@ant-design/icons";

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];
export default class Achivements extends Component{
    render(){
        return(
            <>
                <List
                    size="large"
                    bordered={false}
                    dataSource={data}
                    renderItem={item => <List.Item><TrophyOutlined style={{paddingRight:"1rem", fontSize:"1.2rem"}}/>{item}</List.Item>}
                    />
            </>
        )
    }
}