import React, { Component } from 'react'
import {Timeline} from 'antd'

export default class Experience extends Component{
    render(){
        return(
            <>
                <Timeline mode={'alternate'}>
                    <Timeline.Item label="Rubrik">Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item label="Rubrik">Solve initial network problems 2015-09-01</Timeline.Item>
                    <Timeline.Item label="Rubrik">Technical testing 2015-09-01</Timeline.Item>
                    <Timeline.Item label="Rubrik">Network problems being solved 2015-09-01</Timeline.Item>
                </Timeline>
            </>
        )
    }
}