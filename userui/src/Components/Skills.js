import React, { Component } from 'react';
import {Progress, Descriptions} from 'antd'
import {skillsData} from '../Database/skillsData'
export default class Skills extends Component{
    render(){
        return(
            <>
                {skillsData.map( (skilltype) =>{
                    return(
                        <Descriptions bordered title={skilltype.title} style={{padding:"2rem"}}
                            column={{ xxl: 2, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }} size="small" layout="vertical">
                            {skilltype.item.map( (items) =>{
                                return(
                                    <Descriptions.Item label={items.label} span={1}>
                                        <Progress strokeColor={{
                                            '0%': '#F7971E',
                                            '100%': '#87d068',
                                        }} percent={items.percent} status="active" />
                                    </Descriptions.Item>
                                )
                            })}
                            
                    
                        </Descriptions>
                    )
                })}
            </>
        )
    }
}