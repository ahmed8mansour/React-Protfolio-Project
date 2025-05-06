import React from "react"
import ReactDom from "react-dom"

export default function Footer(){
  return(
    <div className="footer_section">
       <div className="container text-center">
       <ul class="social-network d-flex align-items-center justify-content-center ">
        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
        <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
        <li><a href="#"><i class="fa-solid fa-book"></i></a></li>
        <li><a href="#"><i class="fab fa-github"></i></a></li>
    </ul>
    <p className="footer_text"> &copy;  2024, Made with ❤️ by Ahmed Mansour</p>
       </div>
    </div>
  )
}