import React from 'react';
import './PokemonDetail.css'

const PokemonDetail = (props) => {
  if(!props.pokemon)return null
  return (
    <div>
    <h3>{props.pokemon.name}</h3>
    <p> Height : { props.pokemon.height}</p>
    <p>Weight : { props.pokemon.weight}</p>
    <img src={props.pokemon.sprites.front_default} />
    </div>

  )
}

export default  PokemonDetail;
