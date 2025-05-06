import React from "react"
import ReactDom from "react-dom"

import Card from "./Card"
import CardData from "./CardData"
export default function Blog(){
    const [card , setcard] = React.useState({
        image_visibility : false,
        icon_visibility:false,
        bigger_card : true ,
        underlined :true
    })
    
    const CardDataelement = CardData[5].map( function(element, index , arr){
        return ( 
            <div className="col-xxl-4 col-12 col-lg-6 card_sizing text-start ">
                <Card
                image_visibility ={!card.image_visibility}
                icon_visibility ={!card.icon_visibility}
                underlined ={!card.underlined}
                button_read_boolean ={element.button_read_boolean}
                image_src ={element.image_src}
                image_folder={element.image_folder}
                card_title = {element.title}
                card_text = {element.describtion}
                />
                </div>
        )
}
    )
 return(
   <div className="my_section blog_section" id="blog">
    <div className="container">

    <Card
    image_visibility ={card.image_visibility}
    icon_visibility ={card.icon_visibility}
    bigger_card = {card.bigger_card}
    card_title = "My Blog"
    card_text = "  The Blog, Which has thoughts on life, work and everything in between."
    underlined ={card.underlined}
   />     

<div className="card_group row justify-content-center align-items-start text-start">
                {CardDataelement}

        </div>
        <div className=" button_area row align-items-center justify-content-center">

<button type="button" class="btn blog_btn col-lg-12 mt-3 mb-3">More Blogs</button>
</div>
 
</div>
   
   </div> 
 )
}