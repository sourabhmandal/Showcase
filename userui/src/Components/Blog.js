import React, { Component } from 'react'
import {Card, Row, Col, Button, Drawer, Skeleton} from 'antd'
import {RightSquareOutlined, MediumOutlined} from '@ant-design/icons'
import axios from 'axios'

const {Meta} = Card;

export default class Blog extends Component{
    constructor(props){
        super(props);
        this.state={
            width:0,
            height:0,
            isLoaded : false,
            blogData: [],
            fourBlogData: [],
            show: false
        }
        this.showmore = this.showmore.bind(this);
        this.onClose = this.onClose.bind(this)
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount(){
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        axios.get('https://sourabhmandal.pythonanywhere.com/blog/')
        .then(json =>{
            this.setState({
                isLoaded : true,
                blogData : json.data,
                fourBlogData : json.data.slice(0, 4)
            })
            console.log("BLOG DATA : ", this.state.blogData)
        })
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    showmore(){
        this.setState({show : !this.state.show})
    }
    onClose(){
        this.setState({show: false})
    }
    render(){
        return(
            <>
                <Drawer
                    width={this.state.width < 700 ? "90%" : "60%"}
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.show}
                    >
                    {this.state.blogData.map( (blog)=>{
                       return(
                        <>
                            <Skeleton loading={!this.state.isLoaded} active avatar key={blog.id + 127863}>
                                <Card
                                    style={{ width: '100%', margin:"1rem 0rem" }}
                                    title={blog.name}
                                    extra={<a href={blog.post_link}>Go to the Post</a>}
                                    key={blog.id + 721312}
                                    >
                                    <Meta
                                    avatar={<MediumOutlined />}
                                    description={blog.discription}
                                    />
                                </Card>
                            </Skeleton>
                        </>
                       )
                    })}
                    
                    </Drawer>





                    <Skeleton loading={!this.state.isLoaded} active avatar key={7129}>
                    <Row gutter={[{ xs: 16, sm: 16, md: 32, lg: 16 }, { xs: 16, sm: 16, md: 32, lg:16 }]} style={this.state.width < 700 ? {padding:"0.5rem"} : {paddingLeft:"7rem"} }>
                        {this.state.fourBlogData.map((blog) => {
                            return(
                                
                                <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                                    <Card
                                        style={{ width:'100%', marginRight:"0.5rem"}}
                                        bodyStyle={{minHeight:"120px"}}
                                        title={blog.name}
                                        extra={<a href={blog.post_link}>Go to the Post</a>}
                                        key={blog.id + 16212545}
                                    >
                                    <Meta
                                    avatar={<MediumOutlined />}
                                    description={blog.discription}
                                    />
                                </Card>
                                
                            </Col>
                            
                        )
                    })}
                    </Row>
                    </Skeleton>
                <Row justify={"center"} style={{padding:"1rem"}}>
                    <Col offset={2}>
                        <Button value="more" key={1274400} onClick={this.showmore}>MORE <RightSquareOutlined /></Button>
                    </Col>
                </Row>
            </>
        )
    }
}