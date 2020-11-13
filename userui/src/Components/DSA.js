import React, { Component } from 'react'
import { Tag, Card, Skeleton, Table, Space} from 'antd';
import { FileAddTwoTone } from "@ant-design/icons";
import axios from 'axios';
import Avatar from 'antd/lib/avatar/avatar';
const {Meta} = Card;
const {Column, ColumnGroup} = Table;
export default class DSA extends Component{
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
        const data = [
            {
              key: '1',
              firstName: 'John',
              age: 32,
              address: 'New York No. 1 Lake Park',
              tags: ['nice', 'developer'],
            },
            {
              key: '2',
              firstName: 'Jim',
              age: 42,
              address: 'London No. 1 Lake Park',
              tags: ['loser'],
            },
            {
              key: '3',
              firstName: 'Black',
              age: 32,
              address: 'Sidney No. 1 Lake Park',
              tags: ['cool', 'teacher'],
            },
          ];
        return(
                <Skeleton loading={!this.state.isLoaded} active avatar>
                    <Table dataSource={data} pagination={false} style={this.state.width <700 ? {margin:'0rem 0.5rem'} : {margin:'0rem 7rem'}}>
                        
                        <Column title="Username" dataIndex="firstName" key="firstName" />
                        <Column title="Platform" dataIndex="age" key="age" />
                        <Column title="Ranking" dataIndex="address" key="address" />
                        <Column
                        title="Remarks"
                        dataIndex="tags"
                        key="tags"
                        render={tags => (
                            <>
                            {tags.map(tag => (
                                <Tag color="blue" key={tag}>
                                {tag}
                                </Tag>
                            ))}
                            </>
                        )}
                        />
                        <Column
                        title="Action"
                        key="action"
                        render={(text, record) => (
                            <Space size="middle">
                            <a>Invite {record.lastName}</a>
                            <a>Delete</a>
                            </Space>
                        )}
                        />
                    </Table>
                </Skeleton>
        )
    }
}