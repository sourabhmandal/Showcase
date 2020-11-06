import React, { Component } from 'react';
import { Row, Col} from 'antd';
import SideNavBar from '../Components/SideNavBar'
import { Layout } from 'antd';
import MainText from '../Components/MainText'
const { Header, Footer, Sider, Content } = Layout;
export default class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      visible: false,
    }
    
  }
  
    render(){
      return(
        <>
          <SideNavBar/>
          <Row>
            <Col offset={3}>
              <MainText/>
            </Col>
          </Row>
        </>
    )
  }
}