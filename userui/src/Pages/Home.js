import React, { Component } from 'react';
import { Row, Col} from 'antd';
import SideNavBar from '../Components/SideNavBar'
import {Divider} from 'antd';
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
import DSA from '../Components/DSA'

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
          <Row gutter={{ xs: 8, sm: 16, md: 0, lg: 16 }} justify="center" style={{ backgroundColor:"#fffde4", paddingBottom:"2rem"}}  justify={"space-around"} align={'middle'}>
            <Col lg={16} sm={23} md={16} xs={23} id={"about_link"}>
              <MainText/>
            </Col>
            <Col lg={8} sm={23} md={6} xs={23}>
              <HeroImage/>
            </Col>
          </Row>
                
          <Row>
            <Col offset={this.state.width < 750 ? 0:1} lg={15} xs={23} sm={23} md={15}  id={"education_link"}>
              <Divider><strong>Education</strong></Divider>
              <Education/>
            </Col>
            <Col lg={8} sm={23} xs={23} md={8} id={"hobbies_link"}>
              <Divider><strong>Hobbies</strong></Divider>
              <Hobbies/>
            </Col>
          </Row>


            <Col  offset={this.state.width < 770?0:2} lg={21} sm={24} xs={24} md={21} id={"project_link"}>
              <Divider style={{fontSize:"2rem"}}><strong>PROJECTS</strong></Divider>
            </Col>
          <Projects />

          <Col  offset={this.state.width < 770?0:2} lg={21} sm={24} xs={24} md={21} id={"cp_link"}>
              <Divider style={{fontSize:"2rem"}}><strong>COMPETITIVE CODING</strong></Divider>
            </Col>
          <DSA />



          <Col  offset={this.state.width < 768?0:2} lg={21} sm={24} md={21} id={"work_link"}>
            <Divider style={{fontSize:"2rem"}}><strong>WORK EXPERIENCE</strong></Divider>
          </Col>
          <Col offset={this.state.width < 900 ? 1 : 2} lg={20} xl={20} sm={24} md={22}>
            <Experience/>
          </Col>




          <Col  offset={this.state.width < 750?0:2} lg={21} sm={21} md={21} id={"skills_link"}>
            <Divider style={{fontSize:"2rem"}}><strong>SKILLS</strong></Divider>
          </Col>
          <Col  offset={this.state.width < 750?0:3} lg={20} sm={24} md={20}>
            <Skills />
          </Col>



          <Col  offset={this.state.width < 750?0:2} lg={21} sm={21} md={21} id={"blog_link"}>
            <Divider style={{fontSize:"2rem"}}><strong>BLOG</strong></Divider>
          </Col>
          <Col  offset={this.state.width < 1100?0:1} lg={20} sm={24} md={20} xs={24}>
            <Blog />
          </Col>




          <Row>
            <Col offset={this.state.width < 750 ? 0:1} xl={11} lg={11} xs={23} sm={23} md={11}  id={"achive_link"}>
              <Divider><strong>ACHIVEMENTS</strong></Divider>
              <Achivements />
            </Col>
            <Col xl={11} lg={11} sm={23} xs={23} md={11} id={"courses_link"}>
              <Divider><strong>COURSES</strong></Divider>
              <Courses />
            </Col>
          </Row>
        </>
    )
  }
}