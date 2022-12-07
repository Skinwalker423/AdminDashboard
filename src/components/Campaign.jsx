import React from 'react'
import { Box, Typography } from '@mui/material'

import ProgressCircle from './ProgressCircle'
import { useColors } from '../hooks'

const Campaign = () => {
  const { colors } = useColors()

  return (
    <Box
      gridColumn="span 4"
      gridRow="span 2"
      backgroundColor={colors.primary[400]}
      p="30px"
    >
      <Typography>Campaign</Typography>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        pt="30px"
      >
        <ProgressCircle size="140" isDashBoard={true} />
        <Typography sx={{ pt: '15px', color: colors.greenAccent[500] }}>
          $48,352 Revenue generated
        </Typography>
        <Typography>Includes extra misc expenses</Typography>
      </Box>
    </Box>
  )
}

export default Campaign
