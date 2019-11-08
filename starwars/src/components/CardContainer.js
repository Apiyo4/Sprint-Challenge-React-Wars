import React from 'react';
import Card from './Card';

function CardContainer(props){
   console.log(props.stars)

 return(

   <div>
     
    {  props.stars.map((star, index)=>{
         return(
                <Card
                star = {star}
                key= {index}             
                 />
                
            )
         })
}
   

   </div>
     
   
 )


}
export default CardContainer;