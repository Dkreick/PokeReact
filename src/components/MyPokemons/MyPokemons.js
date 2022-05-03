import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import './MyPokemons.scss'

export default function MyPokemons() {

  return (
    <Card className='my_pokemons__table__container'>
      <Typography variant="h5" component="div" align='center'>
        Todavia no tenes pokemones
      </Typography>
    </Card>
  );
}