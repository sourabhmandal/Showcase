import React, { Component } from 'react';
import { Row, Col} from 'antd';
import SideNavBar from '../Components/SideNavBar'
import { Layout, Divider} from 'antd';
import MainText from '../Components/MainText'
import HeroImage from '../Components/HeroImage'
import TopNavBar from '../Components/TopNavBar'
import Education from '../Components/Education'
import Hobbies from '../Components/Hobbies'
import Projects from '../Components/Projects'
import Skills from '../Components/Skills'
import Experience from '../Components/Experience'
import Blog from '../Components/Blog'
import Achivements from '../Components/Achivements'
import Courses from '../Components/Courses'


const { Header, Footer, Sider, Content } = Layout;
export default class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      visible: false,
      width:0,
      height:0
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  
    render(){
      return(
        <>
              {this.state.width < 750? <TopNavBar/> : <SideNavBar/>}
              
              <Row>
                <Row gutter={{ xs: 8, sm: 16, md: 0, lg: 16 }} justify={"space-around"} align={'bottom'}>
                  <Col lg={18} sm={23} md={23}>
                    <MainText/>
                  </Col>
                  <Col lg={6} sm={23} md={23}>
                    <HeroImage/>
                  </Col>
                </Row>




                
                <Col  offset={this.state.width < 750?0:3} lg={20} sm={24} md={20}>
                  <Row>
                    <Col lg={18} sm={18} md={18}>
                      <Divider><strong>Education</strong></Divider>
                      <Education/>
                    </Col>
                    <Col lg={6} sm={6} md={6}>
                      <Divider><strong>Hobbies</strong></Divider>
                      <Hobbies/>
                    </Col>
                  </Row>
                </Col>
                <Col  offset={this.state.width < 750?0:2} lg={21} sm={21} md={21}>
                  <Divider style={{fontSize:"2rem"}}><strong>PROJECTS</strong></Divider>
                </Col>
                <Col  offset={this.state.width < 750?0:3} lg={20} sm={24} md={20}>
                  <Projects />
                </Col>




                <Col  offset={this.state.width < 750?0:2} lg={21} sm={24} md={21}>
                  <Divider style={{fontSize:"2rem"}}><strong>WORK EXPERIENCE</strong></Divider>
                </Col>
                <Col  offset={this.state.width < 750?0:3} lg={20} sm={24} md={20}>
                  <Experience/>
                </Col>




                <Col  offset={this.state.width < 750?0:2} lg={21} sm={21} md={21}>
                  <Divider style={{fontSize:"2rem"}}><strong>SKILLS</strong></Divider>
                </Col>
                <Col  offset={this.state.width < 750?0:3} lg={20} sm={24} md={20}>
                  <Skills />
                </Col>



                <Col  offset={this.state.width < 750?0:2} lg={21} sm={21} md={21}>
                  <Divider style={{fontSize:"2rem"}}><strong>BLOG</strong></Divider>
                </Col>
                <Col  offset={this.state.width < 750?0:3} lg={20} sm={24} md={20}>
                  <Blog />
                </Col>



                <Col  offset={this.state.width < 750?0:2} lg={21} sm={21} md={21}>
                  <Divider style={{fontSize:"2rem"}}><strong>ACHIVEMENTS</strong></Divider>
                </Col>
                <Col  offset={this.state.width < 750?0:3} lg={20} sm={24} md={20}>
                  <Achivements />
                </Col>

                

                <Col  offset={this.state.width < 750?0:2} lg={21} sm={21} md={21}>
                  <Divider style={{fontSize:"2rem"}}><strong>COURSES</strong></Divider>
                </Col>
                <Col  offset={this.state.width < 750?0:3} lg={20} sm={24} md={20}>
                  <Courses />
                </Col>


              </Row>
              

        </>
    )
  }
}