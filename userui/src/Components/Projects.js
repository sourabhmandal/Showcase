import React, { Component } from 'react'
import { Card, Col, Row, Tag, Avatar, Statistic } from 'antd';
import { StarOutlined, GithubOutlined, MediumOutlined, StarFilled } from "@ant-design/icons";
const {Meta} = Card;
export default class Projects extends Component{
    render(){
        return(
            <Row gutter={16}>
                <Col span={8}>
                    <Card
                        style={{ width: 300 }}
                        bodyStyle={{background:"linear-gradient(145deg, #cedbe6, #f5ffff)", boxShadow:  "27px 27px 53px #c3cfd9, -27px -27px 53px #ffffff"}}
                        actions={[
                            <StarFilled style={{color:"gold"}} />,
                            <GithubOutlined key="github" />,
                            <MediumOutlined key="medium" />,
                        ]}
                    >
                        <Meta
                        title="Card title"
                        description="This is the description This is the description This is the description This is the description This is the description This is the description This is the description This is the description"
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        style={{ width: 300 }}
                        cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                        }
                        actions={[
                            <StarOutlined />,
                            <GithubOutlined key="github" />,
                            <MediumOutlined key="medium" />,
                        ]}
                    >
                        <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title="Card title"
                        description="This is the description"
                        />
                    </Card>
                </Col>
                </Row>
        )
    }
}