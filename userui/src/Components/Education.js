import React, { Component } from 'react'
import { Timeline, Card } from 'antd';

export default class Education extends Component{
    render(){
        return(
            <>
                <Timeline mode={'left'} style={{padding:"1rem 2rem "}}>
                    <Timeline.Item>
                    <Card title="B.Tech Computer Engineering" size="small" style={{ width: "100%" }}>
                        <p>Army Institute of Technology</p>
                        <p>Current SGPA : <strong>8.52</strong></p>
                        <div style={{clear:"fix"}}>
                            <small style={{float:"left"}}>July, 2018 - Present</small>
                            <small style={{float:"right"}}>Pune, India</small>
                        </div>
                    </Card>
                    </Timeline.Item>
                    <Timeline.Item><Card title="Higher Secondary (12th)" size="small" style={{ width: "100%" }}>
                        <p>Kendriya Vidyalaya, Kannur</p>
                        <p>Overall Percentage : <strong>85%</strong></p>
                        <div style={{clear:"fix"}}>
                            <small style={{float:"left"}}>July, 2015 - July, 2016</small>
                            <small style={{float:"right"}}>Kannur, India</small>
                        </div>
                    </Card></Timeline.Item>
                    <Timeline.Item><Card title="Higher Secondary (12th)" size="small" style={{ width: "100%" }}>
                        <p>Kendriya Vidyalaya, Kannur</p>
                        <p>Overall Percentage : <strong>95%</strong></p>
                        <div style={{clear:"fix"}}>
                            <small style={{float:"left"}}>July, 2014 - July, 2015</small>
                            <small style={{float:"right"}}>Kannur, India</small>
                        </div>
                    </Card>
                    </Timeline.Item>
                </Timeline>
                </>            
        )
    }
}