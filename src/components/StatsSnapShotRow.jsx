import React from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import TrafficOutlinedIcon from '@mui/icons-material/TrafficOutlined';

import { Box, useTheme } from '@mui/material'
import { tokens } from '../theme';


const StatsSnapShotRow = () => {
 
  const {palette} = useTheme();
  const colors = tokens(palette.mode);

  return (
    <Box>
        <Box 
            backgroundColor={colors.primary[400]} 
            display='flex'
            gridColumn={'span 3'}
            justifyContent='center'
            alignItems='center'
        >
          <StatBox
            title={'12,361'}
            subTitle={'Emails Sent'}
            progress={0.75}
            increase={'+14%'}
            icon={<EmailOutlinedIcon sx={{
              color: colors.greenAccent[600],
              fontSize: '26px'
            }} />}
          />
        </Box>
        <Box 
          backgroundColor={colors.primary[400]} 
          display='flex'
          gridColumn={'span 3'}
          justifyContent='center'
          alignItems='center'
        >
          <StatBox
            title={'32,441'}
            subTitle={'New Clients'}
            progress={0.30}
            increase={'+58%'}
            icon={<PersonAddAlt1OutlinedIcon sx={{
              color: colors.greenAccent[600],
              fontSize: '26px'
            }} />}
          />
        </Box>
        <Box 
          backgroundColor={colors.primary[400]} 
          display='flex'
          gridColumn={'span 3'}
          justifyContent='center'
          alignItems='center'
        >
          <StatBox
            title={'431,225'}
            subTitle={'Sales Obtained'}
            progress={0.50}
            increase={'+25%'}
            icon={<PointOfSaleOutlinedIcon sx={{
              color: colors.greenAccent[600],
              fontSize: '26px'
            }} />}
          />
        </Box>
        <Box 
          backgroundColor={colors.primary[400]} 
          display='flex'
          gridColumn={'span 3'}
          justifyContent='center'
          alignItems='center'
        >
          <StatBox
            title={'1,325,134'}
            subTitle={'Traffic Inbound'}
            progress={0.80}
            increase={'+43%'}
            icon={<TrafficOutlinedIcon sx={{
              color: colors.greenAccent[600],
              fontSize: '26px'
            }} />}
          />
        </Box>
    </Box>
  )
}

export default StatsSnapShotRow

