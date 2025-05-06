import React from "react"
import ReactDom from "react-dom"


export default function Card(props){
    

  // const card_images =[ design_development ,e_commarce , analyticst ,mobile_friendly ,website_audit ,content_managment]
  console.log(props.image_src)
  // const card_images2 = card_images.map(() => {

  // }) 
  return(
     <div className=" shadow card_paernt d-flex justify-content-center align-items-center">


<div className="card  row align-items-center text-center d-flex justify-content-center align-items-center">
  {props.image_visibility &&  <img src={`/images/${props.image_folder}/${props.image_src}`}  className="card-img-top"/>}
{ props.icon_visibility && <i class={`${props.icon} ${props.icon_type} `}></i>}

  <div className="card-body">

<h5 className={ props.bigger_card ? "big_text" :"card-title"}>{props.card_title}</h5>
{ props.under_boolean && <p className="card_under_text">{props.under_text}</p> }   
{ props.card_boolean && <p className="card_date">{props.card_date}</p> }   
  
   {props.underlined && <div className="lines">
        <div className="diamond">

        </div>
      </div>
      
      } 
   <p className="card-text">{props.card_text}</p>
   { props.button_read_boolean && <a href="#" class="btn shadow align-self-end">Read More</a>}
                   
                   
  </div>
</div>


     </div>
    )
}