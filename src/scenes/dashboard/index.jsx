import React from 'react'
import {Box} from '@mui/material'
import Header from '../../components/Header';
import GeoChart from '../../components/GeoChart';
import { useTheme } from '@mui/material'
import { tokens } from '../../theme';


const Dashboard = () => {

  const {palette} = useTheme();
  const colors = tokens(palette.mode);

  return (
    <Box m='20px'>
      <Header 
        title='Header Title'
        subTitle='subtitle'
      />
      <Box display='flex' justifyContent={'space-evenly'}>
        <Box height='25vh' width={'300px'}  border={`2px solid ${colors.greenAccent[300]}`}>
          <GeoChart isDashBoard={true} />
        </Box>
        <Box height='30vh' width={'300px'} border={`2px solid ${colors.greenAccent[300]}`}>
          <GeoChart isDashBoard={true} />
        </Box>
        <Box height='35vh' width={'300px'} border={`2px solid ${colors.greenAccent[300]}`}>
          <GeoChart isDashBoard={true} />
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard