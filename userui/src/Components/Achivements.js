import React, { Component } from 'react'
import { Card, List } from 'antd';
import { TrophyTwoTone } from "@ant-design/icons";
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
            <>
                <List
                    size="large"
                    bordered={false}
                    dataSource={this.state.achive}
                    renderItem={item => 
                    <List.Item>
                        
                        
                        <Card
                            style={{ width: this.state.width < 900 ? "100%" : "50%" }}
                            
                            actions={[
                                item.position < 3 ? item.position + this.state.posending[item.position-1]  + " Position" :item.position + this.state.posending[3]  + " Position" ,
                                item.from_date
                            ]}>
                            <Meta
                            avatar={<TrophyTwoTone twoToneColor="#FFD700" style={{paddingRight:"1rem", fontSize:"1.2rem"}}/>}
                            title={item.name}
                            description={item.discription}
                            />
                        </Card>
                    </List.Item>}
                />
            </>
        )
    }
}