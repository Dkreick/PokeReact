import React from 'react';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import PokemonDetail from '../Detail/Detail';
import './PokedexTable.scss';

const columns = [
  { id: 'id', label: 'Name', minWidth: 170 },
  { id: 'name', label: 'name', minWidth: 100 },
  {
    id: 'height',
    label: 'height',
    minWidth: 170,
  },
  {
    id: 'weight',
    label: 'weight',
    minWidth: 170,
  },
];

export default function PokedexTable(props) {


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen] = React.useState(false);
  const [selectedPokemon, setselectedPokemon] = React.useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClose = () => {
    setOpen(false);
    setselectedPokemon(false);
  };

  const handleOpen = (data) => {
    setselectedPokemon(data);
    setOpen(true);
  };

  return (
    <Card className='pokedex__table__container'>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.pokemons.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((pokemon) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={pokemon.code} onClick={() => handleOpen(pokemon)}>
                    {columns.map((column) => {
                      return (
                        <TableCell key={column.id}>
                          {pokemon[column.id]}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={props.pokemons.length}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25, 100]}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <PokemonDetail open={open} onChange={handleClose} data={selectedPokemon} />
    </Card>
  );
}