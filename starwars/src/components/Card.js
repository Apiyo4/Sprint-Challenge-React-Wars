import React from 'react';
import Styled from 'styled-components';

const Div = Styled.div`
color: #443e3e;
width: 46%;
box-shadow: 1px 1px #5b0909, -0.5em -0.2em 0.4em #5b0909;
margin-top : 6%;
font-size: 24px;
`
const P = Styled.p`
    font-size: 32px;
`;

function Cards(props){
    console.log(props.star);
    return(
        <Div>
            <h2>{props.star.name}</h2>
            <P>Gender : {props.star.gender}</P>
            <P>Height: {props.star.height}</P>
            <P>Skin Color: {props.star.skin_color}</P>
        </Div>
    )
}
export default Cards;
