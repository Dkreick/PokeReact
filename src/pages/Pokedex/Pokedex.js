import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import axios from "axios";
import './Pokedex.scss';
import PokedexTable from "../../components/PokedexTable/PokedexTable";

export default function Pokedex() {

  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(url, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        res.data.results.map((p) => {
          axios
            .get(p.url, {
              cancelToken: new axios.CancelToken((c) => (cancel = c)),
            })
            .then((res) => {
              console.log(res.data);
              setPokemon((pokemon) => [...pokemon, res.data]);
            });
          return [];
        });
      });

    return () => cancel();
  }, [url]);

  if (loading) return "Loading...";
  return (
    <Box sx={{ flexGrow: 1 }} className='pokedex__container'>
      <PokedexTable pokemon={pokemon} />
    </Box>
  );
}