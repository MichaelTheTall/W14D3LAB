import React from 'react';
import GridView from '../components/GridView';
import SelectedView from '../components/SelectedView';

class PokeDex extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      pokemon: []
    }
    this.handleClick=this.handleClick.bind(this);
  }

  componentDidMount() {
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const datalimit = JSON.parse(jsonString);
      const data = datalimit.results.slice(0,151);
      this.setState({pokemon: data})
    });

    request.send();
  }

  handleClick(event){
    this.setState({selectedPokemonAPI: event})
    console.log(event);
  }

  render(){
    return(
      <div>
          <h1>Welcome to the PokeDex!</h1>
          <SelectedView
          url={this.state.selectedPokemonAPI}
          />
          <GridView data={this.state.pokemon}
          handleClick={this.handleClick}
          />
      </div>
    )
  }

}
export default PokeDex;
