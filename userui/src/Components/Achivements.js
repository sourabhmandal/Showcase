import React, { Component } from 'react'
import { List } from 'antd';
import { TrophyOutlined } from "@ant-design/icons";
import axios from 'axios'
const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];
export default class Achivements extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoaded : false,
            achive: []
        }
    }

    componentDidMount(){
        axios.get('http://sourabhmandal.pythonanywhere.com/achivement/')
        .then(json =>{
            this.setState({
                isLoaded : true,
                achive : json,
            })
        })
        
        
    }
    render(){
        return(
            <>
                <List
                    size="large"
                    bordered={false}
                    dataSource={this.state.achive.data}
        renderItem={item => <List.Item><TrophyOutlined style={{paddingRight:"1rem", fontSize:"1.2rem"}}/>{item.position} in {item.name}</List.Item>}
                    />
            </>
        )
    }
}