import React from 'react'
import {Box} from '@mui/material'
import BarChart from '../components/BarChart'
import Header from '../components/Header'

const Bar = () => {
  return (
    <Box height='85vh' >
      <Header title={'Bar Chart'} subTitle='sales figures for Q3' />
      <BarChart />
    </Box>
  )
}

export default Bar