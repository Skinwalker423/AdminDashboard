import React from 'react'
import {Box, IconButton, Button, Typography, useTheme} from '@mui/material';

import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import TrafficOutlinedIcon from '@mui/icons-material/TrafficOutlined';

import Header from '../../components/Header';
import GeoChart from '../../components/GeoChart';
import BarChart from '../../components/BarChart';
import LineChart from '../../components/LineChart';
import PieChart from '../../components/PieChart';
import ProgressCircle from '../../components/ProgressCircle';
import StatBox from '../../components/StatBox';

import { tokens } from '../../theme';
import { mockTransactions } from '../../data/mockData';


const Dashboard = () => {

  const {palette} = useTheme();
  const colors = tokens(palette.mode);

  return (
    <Box m='20px'>
      <Box display='flex' justifyContent={'space-between'}>
        <Header 
          title='DASHBOARD'
          subTitle='subtitle'
        />
        <Box>
          <Button
            sx={{
              background: colors.blueAccent[700],
              color: colors.gray[100],
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '10px 20px',
            }}
          >
            <DownloadOutlinedIcon sx={{mr: '10px'}} />
            Download reports
          </Button>
        </Box>
      </Box>

      {/* ROW 1 */}
      <Box 
        display='grid'
        gridTemplateColumns={'repeat(12, 1fr)'}
        gridAutoRows='140px'
        gap='20px'
      >
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

        {/* ROW 2 */}
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
          <Box height='250px' ml='-20px'>
            <LineChart isDashBoard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard