import React from 'react';

const SelectedView = (props) => {
      let frontimgurl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+props.data.id+'.png';
      let backimgurl ='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/'+props.data.id+'.png';
      let name = props.data.name;

      if (props.data.length === 0) {
        return null;
      } else {
        const types = props.data.types.map((type) =>{
          return(
            <h3>Type: {type.type.name}</h3>
          )}
        )
        return(
          <div className="selected">
            <h2>{name.charAt(0).toUpperCase() + name.substr(1)}</h2>
            <img
            alt={props.data.name}
            src={frontimgurl}
            />
            <img
            alt={props.data.name}
            src={backimgurl}
            />
            <h3>Height: {props.data.height}in</h3>
            <h3>Weight: {props.data.weight}lbs</h3>
            <h3>Pokemon Number: {props.data.id}</h3>
            {types}
          </div>
    )}
}

export default SelectedView;
