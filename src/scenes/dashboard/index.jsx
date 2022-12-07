import React from 'react'
import { Box, Button } from '@mui/material'

import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined'
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined'
import TrafficOutlinedIcon from '@mui/icons-material/TrafficOutlined'

import Header from '../../components/Header'
import StatBox from '../../components/StatBox'

import RevenueGenerated from '../../components/RevenueGenerated'
import TransactionsRow from '../../components/TransactionsRow'
import Campaign from '../../components/Campaign'
import Sales from '../../components/Sales'
import GeoTraffic from '../../components/GeoTraffic'
import { useColors } from '../../hooks'

const Dashboard = () => {
  const { colors } = useColors()

  return (
    <Box m="20px">
      <Box display="flex" justifyContent={'space-between'} alignItems="center">
        <Header title="DASHBOARD" subTitle="Snapshots of business data" />
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
            <DownloadOutlinedIcon sx={{ mr: '10px' }} />
            Download reports
          </Button>
        </Box>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns={'repeat(12, 1fr)'}
        gridAutoRows="140px"
        mt="20px"
        gap="15px"
      >
        {/* ROW 1 */}

        <StatBox
          title={'12,361'}
          subTitle={'Emails Sent'}
          progress={0.75}
          increase={'+14%'}
          icon={
            <EmailOutlinedIcon
              sx={{
                color: colors.greenAccent[600],
                fontSize: '26px',
              }}
            />
          }
        />
        <StatBox
          title={'32,441'}
          subTitle={'New Clients'}
          progress={0.3}
          increase={'+58%'}
          icon={
            <PersonAddAlt1OutlinedIcon
              sx={{
                color: colors.greenAccent[600],
                fontSize: '26px',
              }}
            />
          }
        />
        <StatBox
          title={'431,225'}
          subTitle={'Sales Obtained'}
          progress={0.5}
          increase={'+25%'}
          icon={
            <PointOfSaleOutlinedIcon
              sx={{
                color: colors.greenAccent[600],
                fontSize: '26px',
              }}
            />
          }
        />
        <StatBox
          title={'1,325,134'}
          subTitle={'Traffic Inbound'}
          progress={0.8}
          increase={'+43%'}
          icon={
            <TrafficOutlinedIcon
              sx={{
                color: colors.greenAccent[600],
                fontSize: '26px',
              }}
            />
          }
        />

        {/* ROW 2 */}

        <RevenueGenerated />
        <TransactionsRow />

        {/* ROW 3 */}

        <Campaign />
        <Sales />
        <GeoTraffic />
      </Box>
    </Box>
  )
}

export default Dashboard
