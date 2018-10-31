import React from 'react';

const PokemonGridItem = (props) => {

  console.log(props);
    return(
      <h1>{props.name}</h1>
    );

}

export default PokemonGridItem;
