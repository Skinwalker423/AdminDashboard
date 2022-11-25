import React, { useState } from 'react';
import {Sidebar, Menu, MenuItem,useProSidebar } from 'react-pro-sidebar';
import {Box, IconButton, Typography, useTheme } from '@mui/material';
import { NavLink } from 'react-router-dom';
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
import { Link } from 'react-router-dom';

const Item = ({title, to, icon, selected, setSelected}) => {

  const {palette} = useTheme();
  const colors = tokens(palette.mode);

  return (
    <Link style={{textDecoration: 'none', color: colors.primary[200]}} to={to}>
      <MenuItem 
        active={selected === title}
        onClick={() => setSelected(title)}
        icon={icon} 
      >
        <Typography color={selected === title ? "#6870fa" : ""}>
          {title}
        </Typography>
      </MenuItem>
    </Link>
  )
}


const SideBar = () => {

  const {palette} = useTheme();
  const colors = tokens(palette.mode);
  const [isDislayed, setIsDisplayed] = useState(true);
  const [selected, setSelected] = useState('Dashboard');
  const { collapseSidebar, collapsed} = useProSidebar();


  return (
    <Box
      sx={{
        ".sidebar-inner": {
          background: `${colors.primary[400]} !important;`,
        },
        "& .menu-item:hover": {
          color: "#6870fa !important",      
        },
        "& .menu-item.active": {
          color: "#6870fa !important",
        },


      }}
    >
      <Sidebar>
        <Menu>
          {isDislayed && (
          <Box>
            <Box display='flex' justifyContent={collapsed ? 'center' : 'space-between'} alignItems='center'>
              {!collapsed && <Typography variant='h3' sx={{mt: '3px'}} >
                Admins
              </Typography>}
              <IconButton onClick={() => collapseSidebar()}>
                <MenuOutlinedIcon />
              </IconButton>
            </Box>
            <Box textAlign={'center'} >
              <img
                src='./favicon.ico'
                alt='profile-user'
                width={collapsed ? '50px' : '75px'}
                height={collapsed ? '50px' : '75px'}
                style={{cursor: 'pointer', borderRadius: '50%'}}
              />
            </Box>
            {!collapsed && <Box textAlign={'center'}>
              <Typography 
                variant='h2' 
                color={colors.gray[100]}
                fontWeight='bold'
                sx={{m: '10px 0 0 0'}}
              >
                Skinwalker
              </Typography>
              <Typography
                variant='h4' 
                color={colors.greenAccent[600]}
                sx={{mb: '30px'}}
              >
                Admin 
              </Typography>
            </Box>}
          </Box>
          )}
          <Box>
            <Item
              to={'/'}
              title={'Dashboard'}
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}

             />
            <Typography sx={{m: '20px 0 10px 20px'}} color={colors.gray[400]}>Data</Typography>
            <Item
              to={'/team'}
              title={'Manage Team'}
              icon={<PeopleOutlinedIcon />}
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
              to={'/invoices'}
              title={'Invoices Balances'}
              icon={<ReceiptLongOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
             />
            <Typography sx={{m: '10px 0 10px 20px'}} color={colors.gray[400]}>Pages</Typography>
            <Item
              to={'/form'}
              title={'Profile Form'}
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
             />
             <Item
              to={'/calendar'}
              title={'Calendar'}
              icon={<CalendarMonthOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
             />
            <Item
              to={'/faq'}
              title={'FAQ'}
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
             />
             <Typography sx={{m: '10px 0 10px 20px'}} color={colors.gray[400]}>Charts</Typography>
             <Item
              to={'/bar'}
              title={'Bar Chart'}
              icon={<InsertChartOutlinedIcon />}
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
              to={'/line'}
              title={'Line Chart'}
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
             />
            <Item
              to={'/pie'}
              title={'Pie Chart'}
              icon={<PieChartOutlineOutlinedIcon />}
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