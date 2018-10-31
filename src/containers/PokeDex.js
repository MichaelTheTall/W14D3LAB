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

  render(){
    return(
      <div>
          <h1>Welcome to the PokeDex!</h1>
          <SelectedView />
          <GridView data={this.state.pokemon}/>
      </div>
    )
  }

}
export default PokeDex;
