import React from "react"
import ReactDom from "react-dom"


export default function LandingPage(){

    return(
        <section id="home" className="my_section landing_page ">
            <nav class="navbar navbar-expand-lg navbar  "> 
 
 <div class="container">
     <a class="navbar-brand landing_name" href="#">Ahmed Mansour
     </a>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
       <span class="fas fa-bars navbar_toggler"></span>
       {/* <span class="navbar-toggler-icon"></span> */}
     </button>
     
     <div class=" navbar-collapse collapse" id="navbarSupportedContent">
       
     <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
         
     <li class="nav-item">
           <a class="nav-link active" aria-current="page" href="#home">Home</a>
         </li>
         
         <li class="nav-item">
           <a class="nav-link active" aria-current="page" href="#about">About</a>
         </li>   
         <li class="nav-item">
           <a class="nav-link active" aria-current="page" href="#skill">Skill</a>
         </li> 
         
           <li class="nav-item">
           <a class="nav-link active" aria-current="page" href="#education">Education</a>
         </li>

         <li class="nav-item">
           <a class="nav-link active" aria-current="page" href="#service">Service</a>
         </li>

         <li class="nav-item">
           <a class="nav-link active" aria-current="page" href="#blog">Blog</a>
         </li>

         <li class="nav-item">
           <a class="nav-link active" aria-current="page" href="#contact">Contact</a>
         </li>
       </ul>

       </div>
       
   </div>
 </nav>
 

 {/* ========================== */}
 {/* ========================== */}
 {/* ========================== */}
   <div className="middle_place d-flex align-items-center justify-content-center landing_name container">
   
    <div className="middle_content text-center">
    <h1 className="big_text home_name" > Ahmed Mansour , Developer</h1>    
    <ul class="social-network d-flex align-items-center justify-content-center ">
    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
    <li><a href="#"><i class="fab fa-github"></i></a></li>
        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
        <li><a href="#"><i class="fa-solid fa-book"></i></a></li>
    </ul>
    </div>

   </div>




        </section>
        
    )
}