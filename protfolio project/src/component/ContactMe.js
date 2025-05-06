import React from "react"
import ReactDom from "react-dom"

import Card from "./Card"
import CardData from "./CardData"

export default function ContactMe(){
    const [card , setcard] = React.useState({
        image_visibility : false,
        icon_visibility:false,
        bigger_card : true ,
        underlined :true
    })

    return(
        <div className="contact_section" id="contact">
           <div className="container">
           <Card
    image_visibility ={card.image_visibility}
    icon_visibility ={card.icon_visibility}
    bigger_card = {card.bigger_card}
    card_title = "Contact Me"
    card_text = "I'm always open to discussing product design work or partnership opportunities."
    underlined ={card.underlined}
   />    

<div className=" card_paernt contact_card d-flex justify-content-center align-items-center">


<div className="card shadow row align-items-center text-center d-flex justify-content-center align-items-center">

  <div className="card-body">

<h5 className="card-title"> Write Your Message Here</h5>  
   <div className="lines">
        <div className="diamond">

        </div>
      </div>
      
      
   <div className="card-text">
  
<div class="form-floating mb-3 ">
  <input class="form-control" id="floatingPassword" placeholder="Your Name"/>
  <label for="floatingPassword" className="text-center">Your Name</label>
</div>
    
      
   <div class="form-floating mb-3 ">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput" className="text-center">Email address</label>
</div>

<div class="form-floating mb-3 ">
  <input class="form-control" id="floatingPassword" placeholder="Your Phone"/>
  <label for="floatingPassword" className="text-center">Your Phone</label>
</div>

<div class="form-floating mb-3">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea" className="text-center" style={{minHeight:"100px !important",}}>Comments</label>
    
  <button type="button" class="btn blog_btn">Send Message</button>


    </div>   

    </div>                   
                   
  </div>
</div>


     </div>

<div className="info_area row justify-content-between align-items-center">
  <div className="info_elemnt text-center col-lg-3 col-12 col-sm-6 mb-3">
  <i className="fa fa-map-marker card_icon_back contact-icon"aria-hidden="true"></i>
  <h3 className="info_title">Address</h3>
  <p className="info_text"> Kolkata , West Bengal, India</p>
  </div>

  <div className="info_elemnt text-center col-lg-3 col-12 col-sm-6 mb-3">
  <i className="fa fa-envelope  card_icon_back contact-icon"aria-hidden="true"></i>
  <h3 className="info_title">Email</h3>
  <p className="info_text">mail.sanajitjana@gmail.com</p>
  </div>

  <div className="info_elemnt text-center col-lg-3 col-12 col-sm-12 mb-3">
  <i className="fa fa-television card_icon_back contact-icon"aria-hidden="true"></i>
  <h3 className="info_title">Latest portfolio</h3>
  <p className="info_text">https://sanajitjana.github.io</p>
  </div>
</div>

            </div>
        </div>
    )
}