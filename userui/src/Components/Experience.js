import React, { Component } from 'react'
import {Timeline, Card, Skeleton} from 'antd'
import axios from 'axios'
export default class Experience extends Component{
    constructor(props){
        super(props);
        this.state = {
            width:0,
            height:0,
            isLoaded : false,
            expData: [],
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    componentDidMount(){
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        axios.get('https://sourabhmandal.pythonanywhere.com/experience/')
        .then(json =>{
            this.setState({
                isLoaded : true,
                expData : json.data,
            })
            console.log("EXPERIENCE DATA",this.state.expData)
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
            <Skeleton loading={!this.state.isLoaded} active paragraph>
                <Timeline mode={this.state.width < 800? 'left' : 'alternate'} style={this.state.width < 700? {padding:"0.5rem", width:'100%'} :{padding:"2em", width:'100%'}}>
                    {this.state.expData.map( (item)=> {
                        return(
                            <Timeline.Item label={this.state.width < 800? "" : item.company}>
                                <Card title={item.designation + ' @' + item.company} bordered={false} style={{ width: "100%" }}
                                     headStyle={{backgroundColor:"#0f0c29", color:"#fffde4"}}
                                     bodyStyle={{backgroundColor:"#fffde4"}}
                                    actions={[
                                        item.from_date,
                                        item.to_date
                                    ]}>
                                    {item.work}
                                </Card>
                                
                            </Timeline.Item>
                        )
                    })}
                </Timeline>
                </Skeleton>
            </>
        )
    }
}