import React from "react"
import ReactDom from "react-dom"
// =================
import Card from "./Card"
import CardData from "./CardData"
// =================

export default function About(){



    const [card , setcard] = React.useState({
        image_visibility : false,
        icon_visibility:false,
        bigger_card : true ,
        underlined :true
    })
     
    const CardDataelementtop = CardData[0].map( function(element, index , arr){
        return ( 

            <div className="col-xxl-3 col-6 col-lg-6 card_sizing"  >
                <Card
                image_visibility ={card.image_visibility}
                icon_visibility ={!card.icon_visibility}
                underlined ={!card.underlined}

                card_title = {element.title}
                card_text = {element.describtion}
                icon ={element.icon}
                icon_type ={element.icon_type}
                />
                </div>
        )
}
    )


    const CardDataelementbottom = CardData[1].map( function(element, index , arr){
        return ( 

            <div className="col-xxl-3 col-6 col-lg-6 card_sizing">
                <Card
                image_visibility ={card.image_visibility}
                icon_visibility ={!card.icon_visibility}
                underlined ={!card.underlined}
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
        <div className="container specific_section" id="about">


        <Card
         image_visibility ={card.image_visibility}
         icon_visibility ={card.icon_visibility}
         bigger_card = {card.bigger_card}
         card_title = "What I do"
         card_text = "  At present time I'm working on a multi-role, as a Web Developer I design and create various websites. And as UI/UX Designer I create many designs for Web Applications and Mobile applications. I create the beauty of the site. I'm responsible for the site's technical aspects, such as its performance and capacity, which are measures of a website's speed and how much traffic the site can handle. In addition, I also create content for the site."
         underlined ={card.underlined}

        />


        <div className="card_group row justify-content-center align-items-start">
                {CardDataelementtop}

        </div>


        <div class="  shadow-lg card horizin_card mb-3">
                <div class="row g-0">
                    <div class="col-md-4 ">
                    <img src="/images/about-image.jpg" class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body row">
                        <div className="shadow specific_lines">
                        <h5 class="card-title big_text  specific_horizin_title">Hi! I'm Ahmed</h5>
                        <div className="lines">
        <div className="diamond">

        </div>
      </div>
                        </div>
                        
                        <p class="card-text">
                        I am a software developer based in Kolkata, India,
                        currently working at Mplify Tech with over 3.5 years of
                        experience. I specialize in backend development,
                        crafting everything from small business websites to
                        complex, interactive web applications. Whether you're a
                        business seeking a robust web presence or an employer
                        looking to hire, you can connect with me{" "}
                        <a className="underline2" href="#contact">
                          here.
                        </a>
                        <br />
                        <br />I take pride in designing and building digital
                        products with clean, elegant code. My expertise includes
                        custom web theme development, and I'm passionate about
                        delivering exceptional user experiences.
                        </p>
                         <br />
                        <a href="#" class="btn shadow align-self-end">See Resume</a>
                        <a href="#" class="btn shadow align-self-end">Hire Me</a>
                   
                   
                    </div>
                    </div>
                </div>
        </div>


        <div className="card_group row justify-content-center align-items-start">
                {CardDataelementbottom}

        </div>
        </div>
    )
}