import React, { Component } from 'react'
import { Timeline, Card, Skeleton} from 'antd';
import axios from 'axios'
export default class Education extends Component{
    constructor(props){
        super(props);
        this.state = {
            width:0,
            height:0,
            isLoaded : false,
            eduData: []
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    componentDidMount(){
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        axios.get('https://sourabhmandal.pythonanywhere.com/education/')
        .then(json =>{
            this.setState({
                isLoaded : true,
                eduData : json.data,
            })
            console.log("EDUCATION DATA",this.state.eduData)
        })
        
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
                
                <Timeline mode={'left'} style={this.state.width < 700 ? {padding:"1rem 0rem 1rem 0.5rem"}: {padding:"1rem 2rem "}}>
                <Skeleton loading={!this.state.isLoaded} active paragraph>
                    {this.state.eduData.map( (item)=>{
                        return(
                            
                            <Timeline.Item key={item.id+1234567}>
                                
                                <Card title={item.degree} key={item.id} size="small" style={{ width: "100%" }}
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