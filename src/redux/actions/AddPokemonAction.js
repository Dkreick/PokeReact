function addPokemon(pokemon) {
  return {
    type: 'ADD_POKEMON',
    payload: { pokemon },
  };
}

function getMyPokemons() {
  return {
    type: 'GET_POKEMONS',
  };
}

export { addPokemon, getMyPokemons };
