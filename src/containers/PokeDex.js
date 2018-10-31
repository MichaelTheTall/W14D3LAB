import React from 'react';
import GridView from '../components/GridView';
import SelectedView from '../components/SelectedView';

class PokeDex extends React.Component {

  render(){
    return(
      <div>
      <SelectedView />
      <GridView />
      </div>
    )
  }

}
export default PokeDex;
