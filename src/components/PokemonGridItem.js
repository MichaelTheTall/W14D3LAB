import React from 'react';

const PokemonGridItem = (props) => {
  let name = props.name;
  let imgurl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+props.number+'.png';

    return(
      <div className="pokemon">
      <img
      src={imgurl}
      />
      <p>{name.charAt(0).toUpperCase() + name.substr(1)}</p>
      </div>
    );

}

export default PokemonGridItem;
