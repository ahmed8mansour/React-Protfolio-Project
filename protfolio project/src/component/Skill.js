import React from "react"
import ReactDom from "react-dom"

import Card from "./Card"
import Programming_bars from "./Programming_bars"
export default function Skill(){

    const [card , setcard] = React.useState({
        image_visibility : false,
        icon_visibility:false,
        bigger_card : true ,
        underlined :true
    })

    const barselement = Programming_bars.map( function(element, index , arr){
        return ( 
// col-xxl-3 col-6 col-lg-6 card_sizing
<div>
<li>{element.title} {element.percent}</li>
<div className="bar"></div>
</div>
             
               
        )
}
    )
     
return(
<div className="skill_section" id="skill">
 <div className="container">
 <Card
    image_visibility ={card.image_visibility}
    icon_visibility ={card.icon_visibility}
    bigger_card = {card.bigger_card}
    card_title = "My Skill"
    card_text = "I value simple  content structure , dlean design patterns ,and thoughtful interactions"
    underlined ={card.underlined}

   />
   <div className="skill_content row justify-content-start align-items-start">
   <div className="skill_right col-lg-6 col-12">
   I specialize in backend development, with a strong focus
                      on architecting robust and efficient server-side
                      applications and APIs. My expertise includes designing and
                      implementing scalable solutions that effectively manage
                      complex business logic, data operations, and integration
                      requirements. I am passionate about leveraging
                      cutting-edge technologies to deliver high-performance and
                      reliable backend systems that meet the evolving needs of
                      modern applications.
   </div>
   <div className="skill_left col-lg-6 col-12">
    <ul>
   {barselement}

    </ul>
   </div>
   </div>
 </div>
</div>
)

}