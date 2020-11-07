import React, { Component } from 'react'
import {Card, Row, Col, Avatar, Button, Drawer, Divider} from 'antd'
import {RightSquareOutlined} from '@ant-design/icons'
const {Meta} = Card;


const DescriptionItem = ({ title, content }) => (
    <div className="site-description-item-profile-wrapper">
      <p className="site-description-item-profile-p-label">{title}:</p>
      {content}
    </div>
  );
export default class Blog extends Component{
    constructor(props){
        super(props);
        this.state={
            show: false
        }
        this.showmore = this.showmore.bind(this);
        this.onClose = this.onClose.bind(this)
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
                    width={640}
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.show}
                    >
                    <p className="site-description-item-profile-p" style={{ marginBottom: 24 }}>
                        User Profile
                    </p>
                    <p className="site-description-item-profile-p">Personal</p>
                    <Row>
                        <Col span={12}>
                        <DescriptionItem title="Full Name" content="Lily" />
                        </Col>
                        <Col span={12}>
                        <DescriptionItem title="Account" content="AntDesign@example.com" />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                        <DescriptionItem title="City" content="HangZhou" />
                        </Col>
                        <Col span={12}>
                        <DescriptionItem title="Country" content="China🇨🇳" />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                        <DescriptionItem title="Birthday" content="February 2,1900" />
                        </Col>
                        <Col span={12}>
                        <DescriptionItem title="Website" content="-" />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                        <DescriptionItem
                            title="Message"
                            content="Make things as simple as possible but no simpler."
                        />
                        </Col>
                    </Row>
                    <Divider />
                    <p className="site-description-item-profile-p">Company</p>
                    <Row>
                        <Col span={12}>
                        <DescriptionItem title="Position" content="Programmer" />
                        </Col>
                        <Col span={12}>
                        <DescriptionItem title="Responsibilities" content="Coding" />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                        <DescriptionItem title="Department" content="XTech" />
                        </Col>
                        <Col span={12}>
                        <DescriptionItem title="Supervisor" content={<a>Lin</a>} />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                        <DescriptionItem
                            title="Skills"
                            content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
                        />
                        </Col>
                    </Row>
                    <Divider />
                    <p className="site-description-item-profile-p">Contacts</p>
                    <Row>
                        <Col span={12}>
                        <DescriptionItem title="Email" content="AntDesign@example.com" />
                        </Col>
                        <Col span={12}>
                        <DescriptionItem title="Phone Number" content="+86 181 0000 0000" />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                        <DescriptionItem
                            title="Github"
                            content={
                            <a href="http://github.com/ant-design/ant-design/">
                                github.com/ant-design/ant-design/
                            </a>
                            }
                        />
                        </Col>
                    </Row>
                    </Drawer>






               <Row gutter={16}>
                    <Col span={12}>
                        <Card title="Blog 1">
                        <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        description="This is the description"
                        />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title="Blog 2">
                            <Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            description="This is the description"
                            />
                        </Card>
                    </Col>
                </Row>
                <Row justify={"center"} style={{padding:"1rem"}}>
                    <Col>
                        <Button value="more" onClick={this.showmore}>MORE <RightSquareOutlined /></Button>
                    </Col>
                </Row>
            </>
        )
    }
}