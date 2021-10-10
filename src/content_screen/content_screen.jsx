import React from "react";
import "./content_screen.css";
import MainContent from "../main_content/main_content";
import Intro from "../intro/intro";
import Footer from "../footer/footer";

export default class ContentScreen extends React.Component {
    render() {
        return(
            <div className="content_screen">
                <div className="nav_bar">
                    <div>
                        <ul>
                            <li><a href="#intro">About</a></li>
                            <li><a href="#main">Work</a></li>
                            <li><a href="#footer">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div id="intro">
                    <Intro></Intro>
                </div>
                <div id="main">
                    <MainContent></MainContent>
                </div>
                <div id="footer">
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}