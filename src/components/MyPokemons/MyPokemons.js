import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './MyPokemons.scss';
import { useSelector } from 'react-redux';

export default function MyPokemons() {
  const myPokemons = useSelector((state) => state.pokemonReducer);

  return (
    <Grid container columns={{ xs: 4, sm: 8, md: 12 }} className='my_pokemons__grid__container'>
      {myPokemons.myPokemons.map((pokemon, index) => {
        return (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Card className='my_pokemons__card'>
              <Box className='my_pokemons__card__title'>
                <Typography variant='h5' component='h6' align='center'>
                  {pokemon.name}
                </Typography>
              </Box>
              <CardContent>
                <Typography
                  variant='body'
                  component='div'
                  align='left'
                  gutterBottom
                >
                  Height: {pokemon.height / 10} M.
                </Typography>
                <Typography
                  variant='body'
                  component='div'
                  align='left'
                  gutterBottom
                >
                  Weight: {pokemon.weight / 10} Kg.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
