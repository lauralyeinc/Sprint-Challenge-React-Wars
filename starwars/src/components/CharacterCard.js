import React from "react"; 





const CharacterCard = (props) => {
  return(
      <div class="container">
        <div class="row">
      <div id ={key} className="info" class="col">
        <h2>Name: {props.name} </h2>
        <h3> Gender: {props.gender}</h3>
        <h3> Birth Year: {props.birth_year}</h3>
        <h3> Height: {props.height}</h3>
        <h3> Mass: {props.mass}</h3>
      </div>
      </div>
  );
}

export default CharacterCard; 

