import React from 'react';
import SelectedView from './SelectedView';
import PokemonGridItem from './PokemonGridItem';


const GridView = (props)=> {

  const pokeNodes = props.data.map(({name, url}) =>{
    return(
        <PokemonGridItem
        name={name}
        url={url}
        />
      )
  })

  return(
    <div>
    {pokeNodes}
    </div>
  )

}


export default GridView;
