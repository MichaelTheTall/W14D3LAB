import React from 'react';
import GridView from '../components/GridView';
import SelectedView from '../components/SelectedView';

class PokeDex extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      pokemon: []
    };
  }

  componentDidMount() {
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=10';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({pokemon: data.results})
    });

    request.send();
  }

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
