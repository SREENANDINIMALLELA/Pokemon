import React from 'react';


  const PokemonSelector = (props)=>{
  const options = props.pokemon.map((pokem,index)=>{
    return <option value={index} key={index}>
    {pokem.name}
    </option>

  })
  function handleChange(event){
    props.onSelectedPokemon(event.target.value)
  }
  return (
    <select id = "pokemon-selector" onChange={handleChange}>
    <option disabled value ="default"> Choose pokemon</option>
    {options}
    </select>
  )
}
export default PokemonSelector;
