import React, {Component} from "react";

import './SideNavBar.css'
// Education// contact// expeiriences // projects // Achivements // blog

/*const FakeData = [
    {
        title: 'Education',
        path: '/',
        icon: <BiBook/>,
        cName: 'nav-text',
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <AiOutlineContacts/>,
        cName: 'nav-text',
    },
    {
        title: 'Expeiriences',
        path: '/expeirience',
        icon: <HiOutlineBriefcase/>,
        cName: 'nav-text',
    },
    {
        title: 'Projects',
        path: '/project',
        icon: <AiOutlineProject/>,
        cName: 'nav-text',
    },
    {
        title: 'Achievements',
        path: '/achievements',
        icon: <RiTrophyLine/>,
        cName: 'nav-text',
    },
    {
        title: 'Blog',
        path: '/blog',
        icon: <RiArticleLine/>,
        cName: 'nav-text',
    },
    {
        title: 'Download',
        path: '/',
        icon: <AiOutlineCloudDownload/>,
        cName: 'nav-text',
    }
]*/


export default class SidenavBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };
        this.toggle = this.toggle.bind(this);
        this.showtext = this.showtext.bind(this);
    }
    toggle(){
        this.setState({expanded : !this.state.expanded});
        console.log(this.state.expanded)
    }

    showtext(){
        return this.state.expanded ?"":"none"
    }

    render() {

        return(
            <>
                <ul>
                    <li><a href="#"><i className="fas fa-bars fa-2x"></i></a></li>
                    <li><i className="fas fa-graduation-cap fa-2x"></i></li>
                    <li><i className="fas fa-phone-alt fa-2x"></i></li>
                    <li><i className="fas fa-briefcase fa-2x"></i></li>
                    <li><i className="fas fa-trophy fa-2x"></i></li>
                    <li><i className="fab fa-blogger-b fa-2x"></i></li>
                </ul>
            </>
        )
    }
}