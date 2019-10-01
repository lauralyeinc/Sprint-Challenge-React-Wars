import React from "react"; 

const CharacterCard = (props) => {
  return(
      <div class="container">
          <div 
            id ={props.key} 
            className="info" class="row">
            <h4 className="col-sm-4">Name: {props.name} </h4>
            <h4 class="col-sm-4"> Gender: {props.gender}</h4>
          </div>
        <div class="row">
          <h4 class="col"> Birth Year: {props.birth_year}</h4>
          </div>
        <div class="row">
          <h4 class="col"> Height: {props.height}</h4>
          </div>
        <div class="row">
          <h4 class="col"> Mass: {props.mass}</h4>
          </div> 
        </div>
  );
}

export default CharacterCard; 

