import React from "react"
import ReactDom from "react-dom"


import Card from "./Card"
import CardData from "./CardData"
export default function Service(){
    const [card , setcard] = React.useState({
        image_visibility : false,
        icon_visibility:false,
        bigger_card : true ,
        underlined :true
    })


    const CardDataelement = CardData[4].map( function(element, index , arr){
     
        return ( 
            <div className="col-xxl-4 col-12 col-sm-6 col-lg-6 card_sizing">
                <Card
                image_visibility ={!card.image_visibility}
                icon_visibility ={!card.icon_visibility}
                underlined ={card.underlined}
                image_src ={element.image_src}
                image_folder={element.image_folder}
                card_title = {element.title}
                card_text = {element.describtion}
                icon ={element.icon}
                icon_type ={element.icon_type}

                />
                </div>
        )
}
    )


    return(
        <div className="service_section my_section" id="service">
            <div className="container">
            <Card
    image_visibility ={card.image_visibility}
    icon_visibility ={card.icon_visibility}
    bigger_card = {card.bigger_card}
    card_title = "Service List"
    card_text = "I always want to make things that make a difference"
    underlined ={card.underlined}
   />           
   
   
   
   
   <div className="card_group row justify-content-center align-items-start">
                {CardDataelement}

        </div>

   
        <Card
    image_visibility ={card.image_visibility}
    icon_visibility ={card.icon_visibility}
    bigger_card = {card.bigger_card}
    card_title = "Testimonials"
    card_text = "People I've worked with have said some nice things"
    underlined ={card.underlined}
   />           

   {/* <div className="service_quote">
   <i className="card_icon_back "></i>

   </div> */}

   

   <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="true">
  <div class="carousel-indicators row align-items-center">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <i className="fa fa-quote-left card_icon_back fa-4x"></i>
    <blockquote class="row align-items-center justify-content-center">
                                    <p>
                                      “Sanajit was a real pleasure to work with
                                      and we look forward to working with him
                                      again. He's definitely the kind of
                                      developer you can trust with a project
                                      from start to finish.”
                                      <br />
                <br />

                                      <span>Ishrak Chaudhury</span>
                                    </p>
                                  </blockquote>
    </div>
    <div class="carousel-item">
    <i className="fa fa-quote-left card_icon_back fa-4x"></i>
    <blockquote class="row align-items-center justify-content-center">
        <p>
        “Sanajit's a clear communicator with the
                                      tenacity and confidence to really dig in
                                      to tricky design scenarios and the
                                      collaborative friction that's needed to
                                      produce excellent work.”
                <br />
                <br />

                <span>Kamrul Roy</span>
        </p>
    </blockquote>
    </div>
    <div class="carousel-item">
    <i className="fa fa-quote-left card_icon_back fa-4x"></i>

    <blockquote class="row align-items-center justify-content-center">
                                    <p>
                                    “Sanajit has done a fantastic job overall.
                                      Not only the site is to design, but the
                                      code is also very clean and slick. Love
                                      the way he achieved the translations
                                      portion of the site.”
                                      <br />
                <br />
                                      <span>Shahadat Mahapatra</span>
                                    </p>
                                  </blockquote>
    </div>
  </div>
  {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <i className="fa fa-quote-left card_icon_color fa-4x"></i>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <i className="fa fa-quote-left card_icon_color fa-4x"></i>
    <span class="visually-hidden">Next</span>
  </button> */}
</div>
    </div>
        </div>

    )
}