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
    axios.get(url).then((res) => {
      setLoading(false);
      res.data.results.map((p) => {
        axios
          .get(p.url)
          .then((res) => {
            setPokemon((pokemon) => [...pokemon, res.data]);
          });
        return [];
      });
    });
  }, [url]);

  if (loading) return "Loading...";
  return (
    <Box sx={{ flexGrow: 1 }}>
      <PokedexTable pokemons={pokemon} />
    </Box>
  );
}