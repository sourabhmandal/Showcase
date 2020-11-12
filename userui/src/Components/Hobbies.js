import renderEmpty from 'antd/lib/config-provider/renderEmpty'
import React, { Component } from 'react'
import { Tag } from 'antd';
import axios from 'axios'
export default class Hobbies extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoaded : false,
            colors : ['#f50', '#2db7f5', '#108ee9', '#87d068'],
            hobData: [],
        }
        
    }
    componentDidMount(){
        axios.get('https://sourabhmandal.pythonanywhere.com/hobbies/')
        .then(json =>{
            this.setState({
                isLoaded : true,
                hobData : json.data,
            })
            console.log("HOBBIES DATA",this.state.hobData)
        })
    }
    render(){
        return(
            <div style={{padding:"2rem"}}>
                {this.state.hobData.map((item) =>{
                    return(
                    <Tag id={item.id} style={{padding:"0.3rem", fontSize:"1rem",margin:'0.3rem'}} color={this.state.colors[Math.floor(Math.floor((Math.random()*10)%4))]} >#{item.hobbie}</Tag> 
                    )
                })}

            </div>            
        )
    }
}