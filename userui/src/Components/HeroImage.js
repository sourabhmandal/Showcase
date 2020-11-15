import React, { Component } from 'react'
import {Avatar } from 'antd';
import Hero from '../Assets/sour.png';
export default class HeroImage extends Component {
  constructor(props){
    super(props)
    this.state = {
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
    return (
        <>
          <Avatar shape="circle" size={{xl:300, lg:300, md:200, sm:300, xs:300}} style={{margin:this.state.width < 750?"2rem":"", boxShadow:  "27px 27px 53px #c3cfd9, -27px -27px 53px #ffffff" }} src={Hero} />
        </>
    );
  }
}