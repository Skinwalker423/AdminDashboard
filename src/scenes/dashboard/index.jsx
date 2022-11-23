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
      <Box>
        test
      </Box>
    </Box>
  )
}

export default Dashboard