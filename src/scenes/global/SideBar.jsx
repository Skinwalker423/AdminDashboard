import React, { useState } from 'react';
import {Sidebar, Menu, MenuItem,useProSidebar, } from 'react-pro-sidebar';
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

const Item = ({title, to, icon, selected, setSelected}) => {

  const {palette} = useTheme();
  const colors = tokens(palette.mode);

  return (
    <MenuItem 
      active={selected === title}
      style={{color: colors.gray[100]}}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  )
}


const SideBar = () => {

  const {palette} = useTheme();
  const colors = tokens(palette.mode);
  const [isDislayed, setIsDisplayed] = useState(true);
  const [selected, setSelected] = useState('Dashboard');
  const { collapseSidebar} = useProSidebar();


  return (
    <Box
      sx={{
        ".sidebar": {
          background: `${colors.primary[400]} !important;`,
    
        },
        ".icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        ".inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        ".inner-item:hover": {
          color: "#868dfb !important",
        },
        ".menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <Sidebar>
        <Menu>
          {isDislayed && (
          <Box>
            <Box display='flex' justifyContent={'flex-end'}>
              <IconButton onClick={() => collapseSidebar()}>
                <MenuOutlinedIcon />
              </IconButton>
            </Box>
            <Box textAlign={'center'}>
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
                fontWeight='bold'
                sx={{m: '10px 0 0 0'}}
              >
                Skinwalker
              </Typography>
              <Typography>
                Admin 
              </Typography>
            </Box>
          </Box>
          )}
          <Box>
            <Item
              to={'/team'}
              title={'Team'}
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
             />
            <Item
              to={'/bar'}
              title={'Bar Chart'}
              icon={<InsertChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
             />
            <Item
              to={'/contacts'}
              title={'Contacts'}
              icon={<ContactsOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
             />
            <Item
              to={'/form'}
              title={'Form'}
              icon={<ReceiptLongOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
             />
            <Item
              to={'/geography'}
              title={'Geography'}
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
             />
            <Item
              to={'/'}
              title={'home'}
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
             />
            <Item
              to={'/'}
              title={'home'}
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
             />
            <Item
              to={'/'}
              title={'home'}
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
             />
            <Item
              to={'/'}
              title={'home'}
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
             />
          </Box>
        </Menu>
      </Sidebar>

    </Box>
  )
}

export default SideBar