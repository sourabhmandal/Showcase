import React, { Component } from 'react';
import {Progress, Descriptions, Skeleton} from 'antd';
import axios from 'axios';

export default class Skills extends Component{
    constructor(props){
        super(props);
        this.state = {
            width: 0,
            height: 0,
            isLoaded : false,
            skillsData: [],
            skillsType: ['Programming Language', 'Libraries / Framework', 'Data Storage / Handling',
                        'Soft Skills', 'Tools'],
            skillsDict: [],
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        
    }
    componentDidMount(){
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        axios.get('https://sourabhmandal.pythonanywhere.com/skills/')
        .then(json =>{
            this.setState({
                isLoaded : true,
                skillsData : json.data,
            })
            console.log("skills DATA",this.state.skillsData)
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
            
                {this.state.skillsType.map( (skillsType) =>{
                    return(
                        <Skeleton loading={!this.state.isLoaded} active paragraph key={skillsType}>
                        <Descriptions bordered title={skillsType}  key={skillsType + 'a'} style={{padding:this.state.width <700 ? "1rem":"2rem"}} key={Math.floor(Math.random()*1000000)}
                            column={{ xxl: 2, xl: 2, lg: 2, md: 1, sm: 1, xs: 1 }} size="small" layout="vertical">
                            
                            {this.state.skillsData.map((items) => { 
                                return(
                                    skillsType === items.skill_group ?
                                        <Descriptions.Item label={items.skill} key={items.id+452} span={1}>
                                            <Progress strokeColor={{
                                                '0%': '#12c2e9',
                                                '50%': '#c471ed',
                                                '100%': '#f64f59',
                                            }} percent={items.percent} key={items.id+31235435} status="active" className={"meter"}/>
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