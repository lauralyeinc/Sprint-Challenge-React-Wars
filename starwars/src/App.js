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

  let fetchCharacters = async () => {
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
    fetchCharacters(); 
  }, []); 

  //  useEffect(() => {
  //   axios
  //  .get('http://swapi.co/api/people/');
  //  .then(response => {
  //    console.log(response.data); 
  //    setCharacter(response.data); 
  //  })
  //  .catch(err => console.error(`Sorry no characters. ${err}`))

  // }, [])
  
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;
