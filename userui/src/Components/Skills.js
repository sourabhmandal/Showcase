import React, { Component } from 'react';
import {Progress, Descriptions, Skeleton} from 'antd';
import axios from 'axios';
export default class Skills extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoaded : false,
            skillsData: [],
            skillsType: ['Programming Language', 'Libraries / Framework', 'Data Storage / Handling',
                        'Soft Skills', 'Tools'],
            skillsDict: [],
        }
        
    }
    componentDidMount(){
        axios.get('https://sourabhmandal.pythonanywhere.com/skills/')
        .then(json =>{
            this.setState({
                isLoaded : true,
                skillsData : json.data,
            })
            console.log("skills DATA",this.state.skillsData)
        })
        
    }
    render(){
        return(
            <>
            
                {this.state.skillsType.map( (skillsType) =>{
                    return(
                        <Skeleton loading={!this.state.isLoaded} active paragraph>
                        <Descriptions bordered title={skillsType} style={{padding:"2rem"}}
                            column={{ xxl: 2, xl: 2, lg: 2, md: 1, sm: 1, xs: 1 }} size="small" layout="vertical">
                            
                            {this.state.skillsData.map((items) => { 
                                return(
                                    //console.log( skillsType, "===", items.skill, ":", skillsType === items.skill)
                                    skillsType === items.skill_group ?
                                        <Descriptions.Item label={items.skill} span={1}>
                                            <Progress strokeColor={{
                                                '0%': '#F7971E',
                                                '100%': '#87d068',
                                            }} percent={items.percent} status="active" />
                                        </Descriptions.Item> : ""
                                )
                            })}
                            
                        </Descriptions>
                        </Skeleton>
                    )
                })}
            
            </>
        )
    }
}