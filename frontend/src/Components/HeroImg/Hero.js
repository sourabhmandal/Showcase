import './Hero.css'
import {Component} from 'react'
import Img from './sourabh.jpg'
import {Bottom} from 'react-spaces'
export default class Hero extends Component{
    render(){
        return(
            <>
                <img src={Img} style={{objectFit:"stretch", width:"100%", zIndex:"-1"}} alt="owner img"/>
                <Bottom size={200} className="overlay">
                    <h1 className="h1">Sourabh Mandal</h1>
                    <h1 className={"h2"}>Open Source Enthusiast</h1>
                    <a href="#"><i className="overlay_link fab fa-github"></i></a>
                    <a href="#"><i className="overlay_link fab fa-linkedin"></i></a>
                    <a href="#"><i className="overlay_link fab fa-blogger"></i></a>
                </Bottom>
            </>
        )
    }
}