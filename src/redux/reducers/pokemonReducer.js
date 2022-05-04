const initialState = {
  pokemon: '',
  myPokemons: [
    {
      name: 'Pepemon',
      height: '7',
      weight: '10'
    }
  ],
};

export default function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_POKEMON':
      return {
        ...state,
        myPokemons: [...state.myPokemons, action.payload.pokemon],
      };
    case 'GET_POKEMONS':
      return {
        state
      };
    default:
      return state;
  }
}