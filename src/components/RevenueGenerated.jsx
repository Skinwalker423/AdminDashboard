import React from 'react'
import {Box, IconButton,Typography, useTheme} from '@mui/material';
import LineChart from './LineChart';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import { tokens } from '../theme';


const RevenueGenerated = () => {

  const {palette} = useTheme();
  const colors = tokens(palette.mode);

  return (
    <Box 
        gridColumn='span 8'
        gridRow='span 2'
        backgroundColor={colors.primary[400]}
      >
        <Box 
          mt='25px'
          p='0 30px'
          display='flex'
          justifyContent='space-between'
          alignItems='center'
        >
          <Box>
            <Typography
              variant='h5'
              fontWeight='600'
              color={colors.gray[100]}
            >
              Revenue Generated
            </Typography>
            <Typography
              variant='h5'
              fontWeight='600'
              color={colors.greenAccent[500]}
            >
              $59,342.32
            </Typography>
          </Box>
          <Box>
            <IconButton>
              <DownloadOutlinedIcon
                sx={{
                  fontSize: '26px',
                  color: colors.greenAccent[500]
                }}
              />
            </IconButton>
          </Box>  
        </Box>
          <Box height='250px' mt='-20px'>
            <LineChart isDashBoard={true} />
          </Box>
      </Box>
  )
}

export default RevenueGenerated