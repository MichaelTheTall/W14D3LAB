import React from 'react';
import GridView from '../components/GridView';
import SelectedView from '../components/SelectedView';

class PokeDex extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      pokemon: [],
      selectedPokemonAPI: []
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
    const url = event;
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({selectedPokemonAPI: data})
      console.log(data);
    });
    request.send();
  }

  render(){
    return(
      <div className='big-box'>
        <div className='header'>
          <h1>Welcome to the PokeDex!</h1>
        </div>

        <div className='selected-view'>
          <SelectedView
          data={this.state.selectedPokemonAPI}
          />
        </div>

        <div className='grid-view'>
          <GridView data={this.state.pokemon}
          handleClick={this.handleClick}
          />
        </div>

      </div>
    )
  }

}
export default PokeDex;
