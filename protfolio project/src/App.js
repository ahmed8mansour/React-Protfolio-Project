import React from "react"
import ReactDom from "react-dom"
import "./css/style.css"
import "./fontawesome-free-6.6.0-web/css/all.min.css"

// components:
import LandingPage from "./component/LandingPage"
import About from "./component/About"
import Skill from "./component/Skill"
import Education from "./component/Education"
import Service from "./component/Service"
import Blog from "./component/Blog"
import ContactMe from "./component/ContactMe"
import Footer from "./component/Footer"
export default function App(){
    return(
        <div>
         <LandingPage/>
         <About/>
         <Skill/>
         <Education/>
         <Service/>
         <Blog/>
         <ContactMe/>
         <Footer/>
        </div>
    )
}