import React from 'react'
import { Box, Typography } from '@mui/material'
import { useColors } from '../hooks'
import BarChart from './BarChart'

const Sales = () => {
  const { colors } = useColors()

  return (
    <Box
      gridColumn="span 4"
      gridRow="span 2"
      backgroundColor={colors.primary[400]}
      p="30px"
    >
      <Box>
        <Typography>Sales Quantity</Typography>
        <Box height="250px">
          <BarChart />
        </Box>
      </Box>
    </Box>
  )
}

export default Sales
