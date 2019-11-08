import React from 'react';
import Card from './Card';
import Styled from 'styled-components';

const Div = Styled.div`
margin: auto;
width: 80%;
margin-top: 50px;
margin-bottom: 50px;
    border: 3px solid #5b0909;
    display: flex;
    justify-content: space-between;
    flex-wrap : wrap;
    padding-top:3%;
    padding-bottom: 5%;
    padding-right: 5%;
    padding-left: 5%;

`;

function CardContainer(props){
   console.log(props.stars)

 return(

   <Div>

     
    {  props.stars.map((star, index)=>{
         return(
            
                <Card
                star = {star}
                key= {index}             
                 />
              
                
            )
         })
}
   

   </Div>
     
   
 )


}
export default CardContainer;