import React from 'react'
import { Box, Typography } from '@mui/material'

import GeoChart from './GeoChart'
import { useColors } from '../hooks'

const GeoTraffic = () => {
  const { colors } = useColors()

  return (
    <Box
      gridColumn="span 4"
      gridRow="span 2"
      backgroundColor={colors.primary[400]}
      p="30px"
    >
      <Typography>Geography Based Traffic</Typography>
      <Box height="225px">
        <GeoChart isDashBoard={true} />
      </Box>
    </Box>
  )
}

export default GeoTraffic
