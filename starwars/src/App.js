import React, {useEffect, useState } from 'react';
import axios from "axios"; 
import styled from "styled-components"; 
import './App.css';
import CharacterCard from "./components/CharacterCard.js"; 

let StyledDiv = styled.div`
  padding: .05rem; 
  margin: 0.5rem;
  background-color: orange;
  border: 2px dashed black;
`; 

let HeaderStyle = styled.h2`
  color: black;
  text-shadow: 1px 1px 5px #fff;
  margin: 2rem;
`


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  
  const [character, setCharacter] = useState("");

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  let getCharacters = async () => {
    try {
      let response = await axios.get('https://swapi.co/api/people/'); 
      console.log(response.data); 
      let character = response.data.results; 
      setCharacter(character); 
    } catch(err) {
      console.log(`Sorry, no characters. ${err}`); 
    }
  }
  useEffect(() => {
    getCharacters(); 
  }, []); 

  if(character !== "") {
    return (
      <div className="App">
        <HeaderStyle className="Header">React Wars <span role="img" aria-label="girlcoding"> 👩‍💻 </span>
        </HeaderStyle>
          return (
            <StyledDiv>
              {character.map((key, data) => {             
              <CharacterCard  id={key} character={data} /> 
              })}; 
          </StyledDiv>
          )
        </div> 
    );
  } else {
    return (
      <div className="App">
       <HeaderStyle className="Header">React Wars</HeaderStyle>
       <div className="loading">
         <HeaderStyle> Waiting for characters to Load. </HeaderStyle>
       </div>
      </div>
    ); 
  }
}

export default App;
