import React, { Component } from 'react'
import {Card } from 'antd';
import Hero from '../Assets/sourabh.jpg';
import { GithubOutlined, MediumOutlined, LinkedinOutlined } from '@ant-design/icons';

const { Meta } = Card;
export default class HeroImage extends Component {
  render(){
    return (
        <>
            <Card
                hoverable
                style={{ width: "22rem", height: "31rem", margin:"4rem 0rem"}}
                cover={<img src={Hero} alt="Picture Unavailable" />}
                actions={[
                    <LinkedinOutlined key="linkedin" />,
                    <GithubOutlined key="github" />,
                    <MediumOutlined key="medium" />,
                  ]}
            >
                <Meta title="Army Institute of Technology" description="Alandi rd, Dighi Hils, Pune" />
            </Card>
            
        </>
    );
  }
}