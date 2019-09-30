import React from "react"; 



const CharacterCard = (props) => {
  return(
    <div className="characterCard">
      <h2>{props.character.name} </h2>
      <div className="info">
        <p> Gender: {props.character.gender}</p>
        <p> Birth Year: {props.character.birth_year}</p>
        <p> Height: {props.character.height}</p>
        <p> Mass: {props.character.mass}</p>
      </div>
    </div>
  );
}

export default CharacterCard; 

