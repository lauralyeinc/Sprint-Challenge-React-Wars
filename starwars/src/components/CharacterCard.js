import React from "react"; 





const CharacterCard = (props) => {
  return(
      <div class="container">
        <div class="row">
          <div 
            //id ={key} 
            className="info">
            <h2 class="col">Name: {props.name} </h2>
            <h3 class="col"> Gender: {props.gender}</h3>
          </div>
        <div class="row">
          <h3 class="col"> Birth Year: {props.birth_year}</h3>
          <h3 class="col"> Height: {props.height}</h3>
          <h3 class="col"> Mass: {props.mass}</h3>
          </div> 
        </div>
        </div> 
  );
}

export default CharacterCard; 

