import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './reducers/pokemonReducer'

const store = configureStore({
  reducer: {
    pokemonReducer: pokemonReducer,
  }
})

export default store;