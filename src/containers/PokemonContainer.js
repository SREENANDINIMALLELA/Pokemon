import React from 'react';
 import PokemonSelector from "../components/PokemonSelector"
class PokemonContainer extends React.Component{
  constructor(props){
    super(props);
    console.log("constructor");
    this.state= {
      pokemon: [],
      currentPokemon:null,
      currentPokemonUrl: null,
      currentPokemonDetails: null
    }
    this.onPokemonSelector= this.onPokemonSelector.bind(this);
  }

  componentDidMount(){
    console.log("mount")
    const url = "https://pokeapi.co/api/v2/pokemon/?limit=151"
    fetch(url)
    .then(res =>res.json())
    .then(data => this.setState({
      pokemon: data.results
    }))
    .catch(err =>console.error)
  }

  componentDidUpdate(){
    fetch(this.state.currentPokemonUrl)
    .then(res => res.json())
    .then(data => this.setState({
      currentPokemonDetails: data
    }))
    .catch(err => console.error)
  }

  onPokemonSelector(index){
    console.log(index);
    const selectedPokemon = this.state.pokemon[index]
      this.setState({
       currentPokemon: selectedPokemon,
       currentPokemonUrl: selectedPokemon.url
      })

  }

  render(){
    console.log("render")
    return (
    <div>
      <PokemonSelector pokemon = {this.state.pokemon} onSelectedPokemon ={this.onPokemonSelector}/>
    </div>
    )
  }

}


export default PokemonContainer;
