import React, {useEffect, useState } from 'react';
import axios from "axios"; 
import './App.css';
import CharacterCard from "./components/CharacterCard.js"; 

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
      let character = response.data.results; 
      console.log(response); 
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
        <h1 className="Header">React Wars <span role="img" aria-label="girlcoding"> 👩‍💻 </span></h1>
        <div className="characterContainer">
          {character.map((character, key) => {
              return( 
              <CharacterCard key={key} character={character} /> 
          )})}; 
          </div> 
      </div>
    );
  } else {
    return (
      <div className="App">
       <h1 className="Header">React Wars</h1>
       <div className="loading">
         <h2> Waiting for characters to Load. </h2>
       </div>
      </div>
    ); 
  }
}

export default App;
