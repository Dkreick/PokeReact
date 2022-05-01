import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import axios from "axios";
import PokedexTable from "../../components/PokedexTable/PokedexTable";

export default function Pokedex() {

  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

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
              setPokemon((pokemon) => [...pokemon, res.data]);
            });
          return [];
        });
      });

    return () => cancel();
  }, [url]);

  if (loading) return "Loading...";
  return (
    <Box sx={{ flexGrow: 1 }}>
      <PokedexTable pokemon={pokemon} />
    </Box>
  );
}