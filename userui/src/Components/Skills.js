import React, { Component } from 'react';
import {Progress, Descriptions} from 'antd'

export default class Skills extends Component{
    render(){
        return(
            <>
                <Descriptions bordered title="Programming Languages"
                column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}>
                    <Descriptions.Item label="C++"><Progress strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }} percent={50} status="active" />
                    </Descriptions.Item>
                    <Descriptions.Item label="Python"><Progress strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }} percent={50} status="active" />
                    </Descriptions.Item>
                    <Descriptions.Item label="Java"><Progress strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }} percent={50} status="active" />
                    </Descriptions.Item>
                    <Descriptions.Item label="Javascript"><Progress strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }} percent={50} status="active" />
                    </Descriptions.Item>
                </Descriptions>
            </>
        )
    }
}