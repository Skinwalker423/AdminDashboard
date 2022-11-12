import React, {useContext} from 'react'
import {Box, IconButton, useTheme, InputBase} from '@mui/material';
import { ColorModeContext, tokens } from '../../theme';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import NightlightRoundOutlinedIcon from '@mui/icons-material/NightlightRoundOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const TopBar = () => {

  const {toggleColorMode} = useContext(ColorModeContext);
  const {palette} = useTheme();
  console.log(palette.mode);
  const colors = tokens(palette.mode);

  const handleDarkModeButton = () => {
    toggleColorMode();
  }


  return (
      <Box display={'flex'} justifyContent='space-between'>
        <Box border={`2px solid ${colors.gray[400]}`}>
          <InputBase />
          <IconButton><SearchOutlinedIcon /></IconButton>
        </Box>
        <Box>
          <IconButton onClick={handleDarkModeButton}>{palette.mode === 'dark' ? <NightlightRoundOutlinedIcon /> : <NightlightOutlinedIcon />}</IconButton>
          <IconButton><NotificationsNoneOutlinedIcon /></IconButton>
          <IconButton><PersonOutlineOutlinedIcon /></IconButton>
          <IconButton><SettingsOutlinedIcon /></IconButton>
        </Box>
      </Box>
    
  )
}

export default TopBar