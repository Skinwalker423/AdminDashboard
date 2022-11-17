import React from 'react'
import {Box, Typography, useTheme, Button, IconButton } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../theme';
import { mockDataTeam } from '../data/mockData';
import Header from '../components/Header';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';





const Team = () => {

  const {palette} = useTheme();
  const colors = tokens(palette.mode);

  const rows = mockDataTeam;

const columns = [
  { 
    field: 'id', 
    headerName: 'ID', 
    width: 150,
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
    field: 'access', 
    headerName: 'Access Level', 
    flex: 1, 
    cellClassName: 'access-column--cell',
    renderCell: ({row: {access}}) => {
      return (
        <Box 
          width='80%'
          m='0 auto'
          p='5px'
          display='flex'
          justifyContent={'center'}
          backgroundColor={access === 'admin' ? colors.greenAccent[600] : colors.greenAccent[700]}
        >
          <IconButton>
            {access === 'admin' && <AdminPanelSettingsOutlinedIcon />}
            {access === 'manager' && <SecurityOutlinedIcon />}
            {access === 'user' && <LockOpenOutlinedIcon />}
            <Typography color={colors.gray[100]} sx={{ml: '5px'}}>
              {access}
            </Typography>
          </IconButton>       
        </Box>
      )
    }
  },
];

  return (
    <Box m='20px'>
      <Header title={'TEAM'} subTitle={'Managing team members'} />
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


      }}>
        <DataGrid
          rows={rows}
          columns={columns}
          />
        </Box>
    </Box>
  )
}

export default Team