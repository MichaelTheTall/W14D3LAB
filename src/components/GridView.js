import React from 'react';
import PokemonGridItem from './PokemonGridItem';


const GridView = (props)=> {

  const pokeNodes = props.data.map(({name, url}, index) =>{
    return(
        <PokemonGridItem
        key={index}
        number={index+1}
        name={name}
        url={url}
        handleClick={props.handleClick}
        />
      )
  })

  return(
    <div className="flex-container">
    {pokeNodes}
    </div>
  )

}


export default GridView;
