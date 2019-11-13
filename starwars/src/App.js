import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import CardContainer from './components/CardContainer'
// import Styled from 'styled-components'

// const Div = Styled.div`
//  border: red;
// `;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [stars, setStars] = useState();
  useEffect(()=>{
    axios.get(' https://swapi.co/api/people')
    .then(response=>{
      
      setStars(response.data.results);
    })
    .catch(error=>{
      console.log(error);
    })
  

  }, [])
  if (!stars) return <h3>Loading...</h3>;
  return (
    <div className="App">
      {/* <Div> */}

      <h1 className="Header">React Wars</h1>
      <CardContainer
        stars = {stars}
        setStars = {setStars}
      
      />
      {/* </Div> */}
      
    </div>
  );
}

export default App;
