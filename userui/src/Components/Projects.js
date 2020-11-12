import React, { Component } from 'react'
import { Card, Col, Row, Skeleton} from 'antd';
import { PlaySquareTwoTone, GithubOutlined, MediumOutlined } from "@ant-design/icons";
import axios from 'axios'
const {Meta} = Card;


export default class Projects extends Component{
    constructor(props){
        super(props)
        this.state = {
          width:0,
          height:0,
          projectData: [],
          isLoaded: false,
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    componentDidMount(){
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        axios.get('https://sourabhmandal.pythonanywhere.com/projects/')
        .then(json =>{
            console.log(json)
            this.setState({
                isLoaded : true,
                projectData : json.data,
            })
            console.log("PROJECT DATA",this.state.projectData)
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
            <Row gutter={[{ xs: 16, sm: 16, md: 64, lg: 64 }, { xs: 16, sm: 16, md: 64, lg: 64 }]} style={this.state.width < 768 ? {paddingLeft: "0rem", padding:"2rem"} : {paddingLeft:"7rem"} }>
            {this.state.projectData.map((item) => {
                return(
                    <Skeleton loading={!this.state.isLoaded} active paragraph>
                    <Col xs={24} sm={24} md={10} lg={7}>
                        
                        <Card
                            style={{ width: "100%",  color:"whitesmoke"}}
                            bordered={false}
                            key={item.id}
                            bodyStyle={{ minHeight:"200px", background:"linear-gradient(145deg, #a8ff78, #78ffd6)", boxShadow:  "27px 27px 53px #c3cfd9, -27px 0px 53px #ffffff"}}
                            actions={[
                                <a href={"#"}><PlaySquareTwoTone twoToneColor="#52c41a" /></a>,
                                <a href={item.project_link}><GithubOutlined key="github" /></a>,
                                <a href={item.project_blog}><MediumOutlined key="medium" /></a>,
                            ]}>
                            <Meta
                                title={item.title}
                                description={item.description}
                            />
                        </Card>
                        
                    </Col>
                    </Skeleton>
                )
            })}
            </Row>

        )
    }
}