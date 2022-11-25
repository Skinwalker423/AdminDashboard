import React from 'react'
import {Box, Typography, useTheme} from '@mui/material';
import { tokens } from '../theme';
import GeoChart from './GeoChart';



const GeoTraffic = () => {

  const {palette} = useTheme();
  const colors = tokens(palette.mode);

  return (
    <Box 
        gridColumn='span 4'
        gridRow='span 2'
        backgroundColor={colors.primary[400]}
        p='30px'
    >
    <Typography>
        Geography Based Traffic
    </Typography>
    <Box height='225px'>
        <GeoChart isDashBoard={true} />
    </Box>
    </Box>
  )
}

export default GeoTraffic