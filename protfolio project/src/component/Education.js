import React from "react"
import ReactDom from "react-dom"

import Card from "./Card"
import CardData from "./CardData"

export default function Education(){
    const [card , setcard] = React.useState({
        image_visibility : false,
        icon_visibility:false,
        bigger_card : true ,
        underlined :true
    })


    const CardDataelementtop = CardData[2].map( function(element, index , arr){
        return ( 

            <div className="col-xxl-4 col-12 col-md-6 card_sizing"  >
                <Card
                image_visibility ={card.image_visibility}
                icon_visibility ={!card.icon_visibility}
                underlined ={card.underlined}

                card_boolean = {element.date_boolean}
                card_date ={element.date}
                card_title = {element.title}
                card_text = {element.describtion}
                icon ={element.icon}
                icon_type ={element.icon_type}
                />
                </div>
        )
}
    )

    const CardDataelementbottom = CardData[3].map( function(element, index , arr){
        return ( 

            <div className="col-xxl-4 col-12 col-md-6 card_sizing"  >
                <Card
                image_visibility ={card.image_visibility}
                icon_visibility ={!card.icon_visibility}
                underlined ={card.underlined}

                card_boolean = {element.date_boolean}
                card_date ={element.date}
                card_title = {element.title}
                card_text = {element.describtion}
                icon ={element.icon}
                icon_type ={element.icon_type}
                under_text ={element.under_text}
                under_boolean={element.under_boolean}
                />
                </div>
        )
}
    )

    return(
     <div id="education" className="Education_section my_section">
     <div className="container">
     <Card
    image_visibility ={card.image_visibility}
    icon_visibility ={card.icon_visibility}
    bigger_card = {card.bigger_card}
    card_title = "Educational Story"
    card_text = "I like to code things from scratch. and enjoy brining ideas to life in the browser"
    underlined ={card.underlined}

   />


         <div className="card_group row justify-content-center align-items-start">
                {CardDataelementtop}

        </div>

        <Card
    image_visibility ={card.image_visibility}
    icon_visibility ={card.icon_visibility}
    bigger_card = {card.bigger_card}
    card_title = "Work Experience"
    card_text = "My career is a canvas of innovation and growth, where each experience paints a new stroke of achievement and learning."
    underlined ={card.underlined}

   />

        <div className="card_group row justify-content-center align-items-start">
                {CardDataelementbottom}

        </div>
     </div>
     </div>
    )
}