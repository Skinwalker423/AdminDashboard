import React from 'react'
import { Box, useTheme, Typography } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'

import { mockDataInvoices } from '../data/mockData'
import Header from '../components/Header'
import { useColors } from '../hooks'

const Invoices = () => {
  const { colors } = useColors()

  const rows = mockDataInvoices

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 150,
      flex: 0.5,
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
      field: 'cost',
      headerName: 'Cost',
      flex: 1,
      renderCell: ({ row: { cost } }) => {
        return (
          <Box>
            <Typography color={colors.greenAccent[500]}>{cost}</Typography>
          </Box>
        )
      },
    },
    {
      field: 'phone',
      headerName: 'Phone',
      flex: 1,
      cellClassName: 'field-column--cell',
    },
    {
      field: 'date',
      headerName: 'Dare',
      flex: 1,
    },
  ]

  return (
    <Box m="20px">
      <Header
        title={'INVOICES'}
        subTitle={'Collection of invoices for future reference'}
      />
      <Box
        m="40px 0 0 0"
        height="70vh"
        width="100%"
        sx={{
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
            color: `${colors.gray[100]} !important`,
          },
          '& .MuiDataGrid-checkboxInput': {
            color: `${colors.greenAccent[400]} !important`,
          },
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection={true}
          components={{
            Toolbar: GridToolbar,
          }}
        />
      </Box>
    </Box>
  )
}

export default Invoices
