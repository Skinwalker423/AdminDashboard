import React from 'react'
import { Box } from '@mui/material'
import Header from '../components/Header'
import GeoChart from '../components/GeoChart'

const Geography = () => {
  return (
    <Box>
      <Header
        title="GEOGRAPHY CHART"
        subTitle=" divided geographical areas shaded in relation to our data"
      />
      <Box height="80vh">
        <GeoChart />
      </Box>
    </Box>
  )
}

export default Geography
