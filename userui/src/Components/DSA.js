import React, { Component } from 'react'
import { Card, Col, Row, Skeleton, Typography} from 'antd';
import { RiseOutlined, StarFilled, LinkOutlined} from "@ant-design/icons";
import axios from 'axios'
const {Meta} = Card;


export default class Projects extends Component{
    constructor(props){
        super(props)
        this.state = {
          width:0,
          height:0,
          dsaData: [],
          isLoaded: false,
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    componentDidMount(){
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        axios.get('https://sourabhmandal.pythonanywhere.com/dsa/')
        .then(json =>{
            console.log(json)
            this.setState({
                isLoaded : true,
                dsaData : json.data,
            })
            console.log("DSA DATA",this.state.dsaData)
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
            <Skeleton loading={!this.state.isLoaded} active paragraph>
            <Row gutter={[{ xs: 16, sm: 16, md: 64, lg: 64 }, { xs: 16, sm: 16, md: 64, lg: 64 }]} style={this.state.width < 700 ? {padding:"0.5rem"} : {paddingLeft:"7rem"} }>
            {this.state.dsaData.map((item) => {
                return(
                    
                    <Col xs={24} sm={24} md={10} lg={7}>
                        
                        <Card
                            style={{ width: "100%"}}
                            bordered={false}
                            hoverable
                            key={String(item.id)+"dsa"}
                            bodyStyle={{ minHeight:"200px", background:"linear-gradient(145deg, #36D1DC, #5B86E5)"}}
                            actions={[
                                <a href={item.link}><StarFilled key={"rating" + String(item.id)} style={{color:"gold"}} />{item.rating}</a>,
                                <a href={item.link}><RiseOutlined key={"ranking" + String(item.id)} style={{color:"blue"}}/>{item.ranking}</a>,
                                <a href={item.link}><LinkOutlined key={"link" + String(item.id)}  style={{color:"cyan"}}/></a>,
                            ]}>
                                <h2>{item.username}, <small>{item.platform}</small></h2>
                                <Typography.Paragraph>{item.remark}</Typography.Paragraph>
                        </Card>
                        
                    </Col>
                    
                )
            })}
            </Row>
            </Skeleton>

        )
    }
}