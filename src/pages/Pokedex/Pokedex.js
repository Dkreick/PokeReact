import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokedexTable from '../../components/PokedexTable/PokedexTable';
import MyPokemons from '../../components/MyPokemons/MyPokemons';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './Pokedex.scss';
import AddPokemon from '../../components/AddPokemon/AddPokemon';
import {
  addPokemon,
  getMyPokemons,
} from '../../redux/actions/AddPokemonAction';
import { connect } from 'react-redux';

function Pokedex({ addPokemon, getMyPokemons }) {
  const [open, setOpen] = React.useState(false);
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';

  useEffect(() => {
    setLoading(true);
    axios.get(url).then((res) => {
      setLoading(false);
      res.data.results.map((p) => {
        axios.get(p.url).then((res) => {
          setPokemon((pokemon) => [...pokemon, res.data]);
        });
        return [];
      });
    });
  }, [url]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  if (loading) return 'Loading...';
  return (
    <div className='pokedex__container'>
      <PokedexTable pokemons={pokemon} />
      <MyPokemons pokemons={getMyPokemons} />
      <Fab className='pokedex__add' onClick={handleOpen}>
        <AddIcon />
      </Fab>

      <AddPokemon open={open} onClose={handleClose} onSubmit={addPokemon} />
    </div>
  );
}

export default connect((store) => store, addPokemon, getMyPokemons)(Pokedex);
