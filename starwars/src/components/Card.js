import React from 'react';

function Cards(props){
    console.log(props.star);
    return(
        <div>
            <h2>{props.star.name}</h2>
            <p>Gender : {props.star.gender}</p>
            <p>Height: {props.star.height}</p>
            <p>Skin Color: {props.star.skin_color}</p>
        </div>
    )
}
export default Cards;
