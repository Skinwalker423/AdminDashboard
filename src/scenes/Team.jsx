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
    headerClassName: 'super-app-theme--header',
  },
  { 
    field: 'name', 
    headerName: 'Name', 
    flex: 1, 
    cellClassName: 'name-column--cell',
    headerClassName: 'super-app-theme--header',
  },
  { 
    field: 'email', 
    headerName: 'Email', 
    flex: 1, 
    cellClassName: 'email-column--cell',
    headerClassName: 'super-app-theme--header',
  },
  { 
    field: 'age', 
    headerName: 'Age', 
    flex: 1,
    type: 'number',
    headerAlign: 'left',
    align: 'left', 
    cellClassName: 'age-column--cell',
    headerClassName: 'super-app-theme--header',
  },
  { 
    field: 'phone', 
    headerName: 'Phone', 
    flex: 1, 
    cellClassName: 'field-column--cell',
    headerClassName: 'super-app-theme--header',
  },
  { 
    field: 'access', 
    headerName: 'Access Level', 
    flex: 1, 
    cellClassName: 'access-column--cell',
    headerClassName: 'super-app-theme--header',
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
        '.super-app-theme--header': {
          backgroundColor: colors.redAccent[300],
          color: colors.primary[400]
        }
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