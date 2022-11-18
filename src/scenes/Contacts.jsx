import React from 'react'
import {Box, useTheme } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../theme';
import { mockDataContacts } from '../data/mockData';
import Header from '../components/Header';






const Contacts = () => {

  const {palette} = useTheme();
  const colors = tokens(palette.mode);

  const rows = mockDataContacts;

const columns = [
  { 
    field: 'id', 
    headerName: 'ID', 
    width: 150,
    flex: .5,
  },
  { 
    field: 'name', 
    headerName: 'Name', 
    flex: 1, 
    cellClassName: 'name-column--cell',
  },
  { 
    field: 'email', 
    headerName: 'Email', 
    flex: 1, 
    cellClassName: 'email-column--cell',
  },
  { 
    field: 'age', 
    headerName: 'Age', 
    flex: 1,
    type: 'number',
    headerAlign: 'left',
    align: 'left', 
    cellClassName: 'age-column--cell',
  },
  { 
    field: 'phone', 
    headerName: 'Phone', 
    flex: 1, 
    cellClassName: 'field-column--cell',
  },
  { 
    field: 'address', 
    headerName: 'Address', 
    flex: 1, 

  },
  { 
    field: 'city', 
    headerName: 'City', 
    flex: 1, 
    
  },
  { 
    field: 'zipCode', 
    headerName: 'Zipcode', 
    flex: 1, 
    
  },
  { 
    field: 'registrarId', 
    headerName: 'Registrar ID',
    type: 'number' ,
    flex: 1, 
    headerAlign: 'left',
    align: 'left', 
    
  },
  
];

  return (
    <Box m='20px'>
      <Header title={'CONTACTS'} subTitle={'List of contacts for future reference'} />
      <Box m='40px 0 0 0' height='70vh' width='100%' sx={{
        '& .MuiDataGrid-columnHeaders': {
          backgroundColor: colors.blueAccent[700],
        },
        '& .name-column--cell': {
          color: colors.greenAccent[300],
    
        },
        '& .MuiDataGrid-cell': {
          borderBottom: 'none',
        },
        '& .MuiDataGrid-root': {
          border: 'none',
        },
        '& .MuiDataGrid-footerContainer': {
          borderTop: 'none',
          backgroundColor: colors.blueAccent[700],
        },
        '& .MuiDataGrid-virtualScroller': {
          backgroundColor: colors.primary[400],
        },
        '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
          color: `${colors.gray[100]} !important`
        },


      }}>
        <DataGrid
          rows={rows}
          columns={columns}
          components={{
            Toolbar: GridToolbar,
          }}
          />
        </Box>

    </Box>
  )
}

export default Contacts