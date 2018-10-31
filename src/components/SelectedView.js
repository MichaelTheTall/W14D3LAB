import React from 'react';

const SelectedView = (props) => {
      let frontimgurl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+props.data.id+'.png';
      let backimgurl ='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/'+props.data.id+'.png';
      let name = props.data.name;

      if (props.data.length == 0) {
        return null;
      } else {
        return(
          <div className="pokemon">
          <img
          alt={props.data.name}
          src={frontimgurl}
          />
          <img
          alt={props.data.name}
          src={backimgurl}
          />
          <p>{name.charAt(0).toUpperCase() + name.substr(1)}</p>
          </div>
    )}
}

export default SelectedView;
