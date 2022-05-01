import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function PokedexTable(props) {

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    {
      field: 'height',
      headerName: 'height',
      type: 'number',
      width: 90,
    },
    {
      field: 'weight',
      headerName: 'weight',
      type: 'number',
      width: 90,
    },
  ];

  return (
    <DataGrid
      rows={props.pokemon}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
    />
  );
}