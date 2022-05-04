import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokedexTable from '../../components/PokedexTable/PokedexTable';
import MyPokemons from '../../components/MyPokemons/MyPokemons';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

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
  const [loadingError, setLoadingError] = useState(false);
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
    }).catch((res) => {
      console.log(res);
      setLoading(false);
      setLoadingError(true)
    });
  }, [url]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  if (loading) {
    return (
      <Box className='pokedex__loading'>
        <CircularProgress />
      </Box>
    )
  }

  if (loadingError) {
    return (
      <Box className='pokedex__loading'>
        <Typography variant="h5" gutterBottom component="div">
         Error loading Pokedex
        </Typography>
      </Box>
    )
  }

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
