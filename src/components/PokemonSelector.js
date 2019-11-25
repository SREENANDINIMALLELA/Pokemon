import React from 'react';

import './PokemonSelector.css'
  const PokemonSelector = (props)=>{
  const options = props.pokemon.map((pokem,index)=>{
    return <option   value={index} key={index}>
    {pokem.name}
    </option>

  })
  function handleChange(event){
    props.onSelectedPokemon(event.target.value)
  }
  return (
    <select class="custom-select" onChange={handleChange}>

    <option disabledvalue="default"> Choose pokemon</option>
    {options}
    </select>
  )
}
export default PokemonSelector;
