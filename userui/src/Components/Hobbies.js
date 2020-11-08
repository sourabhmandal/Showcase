import renderEmpty from 'antd/lib/config-provider/renderEmpty'
import React, { Component } from 'react'
import { Tag } from 'antd';

export default class Hobbies extends Component{
    render(){
        return(
            <div style={{padding:"2rem"}}>
                <Tag style={{padding:"0.3rem", fontSize:"1rem",margin:'0.3rem'}}color="#f50">#Open Source</Tag>
                <Tag style={{padding:"0.3rem", fontSize:"1rem",margin:'0.3rem'}}color="#2db7f5">#BasketBall</Tag>
                <Tag style={{padding:"0.3rem", fontSize:"1rem",margin:'0.3rem'}}color="#108ee9">#Entreprenuer</Tag>
                <Tag style={{padding:"0.3rem", fontSize:"1rem",margin:'0.3rem'}}color="#87d068">#Drawing</Tag>
                <Tag style={{padding:"0.3rem", fontSize:"1rem",margin:'0.3rem'}}color="#108ee9">#Books</Tag>
                <Tag style={{padding:"0.3rem", fontSize:"1rem",margin:'0.3rem'}}color="#f50">#Movies</Tag>
                <Tag style={{padding:"0.3rem", fontSize:"1rem",margin:'0.3rem'}}color="#2db7f5">#Travelling</Tag>
                <Tag style={{padding:"0.3rem", fontSize:"1rem",margin:'0.3rem'}}color="#108ee9">#Hicking</Tag>
                <Tag style={{padding:"0.3rem", fontSize:"1rem",margin:'0.3rem'}}color="#87d068">#Deep Learning</Tag>
                <Tag style={{padding:"0.3rem", fontSize:"1rem",margin:'0.3rem'}}color="#108ee9">#GSOC</Tag>
                <Tag style={{padding:"0.3rem", fontSize:"1rem",margin:'0.3rem'}}color="#f50">#GSOD</Tag>
                <Tag style={{padding:"0.3rem", fontSize:"1rem",margin:'0.3rem'}}color="#2db7f5">#Outreachy</Tag>
                <Tag style={{padding:"0.3rem", fontSize:"1rem",margin:'0.3rem'}}color="#108ee9">#Machine Learning</Tag>
                <Tag style={{padding:"0.3rem", fontSize:"1rem",margin:'0.3rem'}}color="#87d068">#Startup</Tag>
                <Tag style={{padding:"0.3rem", fontSize:"1rem",margin:'0.3rem'}}color="#108ee9">#Fintech</Tag>

            </div>            
        )
    }
}