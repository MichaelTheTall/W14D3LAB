import React from 'react';

const PokemonGridItem = (props) => {

  console.log(props);
   let name = props.name
    return(
      <p>{name.charAt(0).toUpperCase() + name.substr(1)}</p>
    );

}

export default PokemonGridItem;
