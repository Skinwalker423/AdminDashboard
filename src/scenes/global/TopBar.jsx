import React, {useContext, useState} from 'react'
import {Box, IconButton, InputBase} from '@mui/material';
import { ColorModeContext } from '../../theme';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import NightlightRoundOutlinedIcon from '@mui/icons-material/NightlightRoundOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationMenu from '../../components/NotificationMenu';

import { useColors } from '../../hooks';


const TopBar = () => {

  const {toggleColorMode} = useContext(ColorModeContext);
  const {colors, palette} = useColors();

  const [notificationMenu, setNotificationMenu] = useState(false)

  const handleDarkModeButton = () => {
    toggleColorMode();
  }

  const handleNotificationsButton = () => {
    setNotificationMenu((bool) => !bool);
  }


  return (
      <Box display={'flex'} justifyContent='space-between' p={2} borderBottom={`2px solid ${colors.gray[400]}`}>
        <Box 
          border={`2px solid ${colors.gray[400]}`} 
          borderRadius="3px"
          backgroundColor={colors.primary[400]}
        >
          <InputBase sx={{ml: 2, flex: 1, }} />
          <IconButton><SearchOutlinedIcon /></IconButton>
        </Box>
        <Box
          display='flex'
        >
          <IconButton onClick={handleDarkModeButton}>
            {palette.mode === 'dark' ? <NightlightRoundOutlinedIcon /> : <NightlightOutlinedIcon />}
          </IconButton>
          <IconButton onClick={handleNotificationsButton}>
            {notificationMenu ? <NotificationsIcon /> : <NotificationsNoneOutlinedIcon />}
          </IconButton>
          <IconButton>
            <PersonOutlineOutlinedIcon />
          </IconButton>
          <IconButton>
            <SettingsOutlinedIcon />
          </IconButton>
        </Box>
        {notificationMenu && <NotificationMenu />}
      </Box>
    
  )
}

export default TopBar