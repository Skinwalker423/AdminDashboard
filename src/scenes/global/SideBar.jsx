import React, { useState } from 'react';
import {Sidebar, Menu, MenuItem,useProSidebar} from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';
import {Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../theme';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';


const SideBar = () => {

  const {palette} = useTheme();
  const colors = tokens(palette.mode);
  const [isDislayed, setIsDisplayed] = useState(true);
  const [selected, setSelected] = useState('Dashboard');
  const { collapseSidebar} = useProSidebar();


  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.blueAccent[400]} !imporant`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <Sidebar px={{
        width: '20%',
        height: '100%',
      }}>
        <Menu>
          {isDislayed && (
          <Box>
            <Box>
              <img
                src='./favicon.ico'
                alt='profile-user'
                width='100px'
                height='100px'
                style={{cursor: 'pointer', borderRadius: '50%'}}
              />
            </Box>
            <Box textAlign={'center'}>
              <Typography 
                variant='h2' 
                color={colors.gray[100]}
              >
                Skinwalker
              </Typography>
              <Typography>
                Admin 
              </Typography>
            </Box>
          </Box>
          )}
          <MenuItem>
            <IconButton>
              <HomeOutlinedIcon />
            </IconButton>
          </MenuItem>
        </Menu>
      </Sidebar>
      <button type='button' onClick={() => collapseSidebar()}>toggle sidebar</button>
    </Box>
  )
}

export default SideBar