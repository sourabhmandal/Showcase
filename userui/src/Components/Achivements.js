import React, { Component } from 'react'
import { Card, List, Skeleton } from 'antd';
import {  TrophyFilled } from "@ant-design/icons";
import axios from 'axios'

const {Meta} = Card;
export default class Achivements extends Component{
    constructor(props){
        super(props);
        this.state = {
            width:0,
            height:0,
            isLoaded : false,
            achive: [],
            posending: ['st', 'nd', 'rd', 'th']
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount(){
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        axios.get('https://sourabhmandal.pythonanywhere.com/achivement/')
        .then(json =>{
            this.setState({
                isLoaded : true,
                achive : json.data,
            })
            console.log("ACHIVE DATA : ", this.state.achive)
        })
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render(){
        return(
            <div>
                <Skeleton loading={!this.state.isLoaded} active avatar>
                <List
                    size="large"
                    bordered={false}
                    style={{padding:"0" , margin:"0"}}
                    dataSource={this.state.achive}
                    renderItem={item => 
                    <List.Item>
                        
                        
                        <Card
                            style={{ width: "100%"}}
                            bodyStyle={{background:"linear-gradient(90deg, #fffde4 , #EFEFBB)", minHeight:"200px"}}
                            actions={[
                                <a href={item.link}>{item.position < 3 ? item.position + this.state.posending[item.position-1]  + " Position" :item.position + this.state.posending[3]  + " Position"}</a>,
                                <a href={item.link}>{item.link != "#" ? "Certificate" : "-NA-"}</a>,
                                <a href={item.link}>{item.from_date}</a>
                            ]}>
                            <Meta
                            avatar={<TrophyFilled  style={{color: "#FFD700", paddingRight:"1rem", fontSize:"1.2rem"}}/>}
                            title={item.name}
                            style={{ color:"#fffde4"}}
                            description={item.discription}
                            />
                        </Card>
                    </List.Item>}
                />
                </Skeleton>
            </div>
        )
    }
}