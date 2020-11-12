import React, { Component } from 'react'
import { Timeline, Card, Skeleton} from 'antd';
import axios from 'axios'
export default class Education extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoaded : false,
            eduData: []
        }
        
    }
    componentDidMount(){
        axios.get('https://sourabhmandal.pythonanywhere.com/education/')
        .then(json =>{
            this.setState({
                isLoaded : true,
                eduData : json.data,
            })
            console.log("EDUCATION DATA",this.state.eduData)
        })
    }
    render(){
        return(
            <>
                
                <Timeline mode={'left'} style={{padding:"1rem 2rem "}}>
                <Skeleton loading={!this.state.isLoaded} active paragraph>
                    {this.state.eduData.map( (item)=>{
                        return(
                            
                            <Timeline.Item>
                                
                                <Card title={item.degree} size="small" style={{ width: "100%" }}
                                    headStyle={{backgroundColor:"#0f0c29", color:"#fffde4"}}
                                    bodyStyle={{backgroundColor:"#fffde4"}}
                                    >
                                    <p>{item.college}</p>
                                    <p>Result : <strong>{item.sgpa}</strong></p>
                                    <div style={{clear:"fix"}}>
                                        <small style={{float:"left"}}>{item.from_date} - {item.to_date}</small>
                                        <small style={{float:"right"}}>{item.location}</small>
                                    </div>
                                </Card>
                                
                            </Timeline.Item>
                            
                        )
                    })}</Skeleton>
                </Timeline>
                
                </>            
        )
    }
}