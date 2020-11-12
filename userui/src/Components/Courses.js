import React, { Component } from 'react'
import { List, Card, Skeleton} from 'antd';
import { FileAddTwoTone } from "@ant-design/icons";
import axios from 'axios';
const {Meta} = Card;

export default class Courses extends Component{
    constructor(props){
        super(props);
        this.state = {
            width:0,
            height:0,
            isLoaded : false,
            courses: []
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount(){
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        axios.get('https://sourabhmandal.pythonanywhere.com/courses/')
        .then(json =>{
            this.setState({
                isLoaded : true,
                courses : json.data,
            })
            console.log("COURSE DATA : ", this.state.courses)
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
            <Skeleton loading={!this.state.isLoaded} active avatar>
                <List
                    size="large"
                    bordered={false}
                    dataSource={this.state.courses}
                    renderItem={item => 
                        
                            <List.Item>
                                
                                <Card
                                    style={{ width: this.state.width < 900 ? "100%" : "70%" }}
                                    bodyStyle={{background:"linear-gradient(90deg, #86fde8,#acb6e5)"}}
                                    actions={[
                                        "Issueing Authority : " + "Coursera",
                                        item.from_date
                                    ]}>
                                    <Meta
                                    avatar={<FileAddTwoTone twoToneColor="#87d068" style={{paddingRight:"1rem", fontSize:"1.2rem"}}/>}
                                    title={item.name}
                                    description={item.discription}
                                    />
                                </Card>
                                
                            </List.Item>
                        }
                /></Skeleton>
            </>
        )
    }
}