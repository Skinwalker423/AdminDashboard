import React from 'react'
import {Box, Typography, useTheme} from '@mui/material';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { tokens } from '../theme';
import { mockDataTeam } from '../data/mockData';


const rows = mockDataTeam;

const columns = [
  { field: 'id', headerName: 'Id', width: 150 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'email', headerName: 'Email', width: 150 },
  { field: 'age', headerName: 'Age', width: 150 },
  { field: 'phone', headerName: 'Phone', width: 150 },
  { field: 'access', headerName: 'Access', width: 150 },
];

const Team = () => {
  return (
    <Box height='300px' width='100%'>
      <DataGrid
        rows={rows}
        columns={columns}
      />
    </Box>
  )
}

export default Team