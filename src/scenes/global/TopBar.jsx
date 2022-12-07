import React, { useContext, useState } from 'react'
import { Box, IconButton, InputBase, Tooltip } from '@mui/material'
import { Link } from 'react-router-dom'
import { ColorModeContext } from '../../theme'
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined'
import NightlightRoundOutlinedIcon from '@mui/icons-material/NightlightRoundOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import NotificationMenu from '../../components/NotificationMenu'
import Settings from '../settings/Settings'

import { useColors } from '../../hooks'

const TopBar = () => {
  const { toggleColorMode } = useContext(ColorModeContext)
  const { colors, palette } = useColors()

  const [notificationMenu, setNotificationMenu] = useState(false)
  const [showSettings, setShowSettings] = useState(false)

  const handleDarkModeButton = () => {
    toggleColorMode()
  }

  const handleNotificationsButton = () => {
    setNotificationMenu((bool) => !bool)
  }

  const handleSettingsButton = () => {
    setShowSettings((bool) => !bool)
  }
  const handlePersonButton = () => {
    console.log('clicked person icon')
  }

  return (
    <Box
      display={'flex'}
      justifyContent="space-between"
      p={2}
      borderBottom={`2px solid ${colors.gray[400]}`}
    >
      <Box
        border={`2px solid ${colors.gray[400]}`}
        borderRadius="3px"
        backgroundColor={colors.primary[400]}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} />
        <IconButton>
          <SearchOutlinedIcon />
        </IconButton>
      </Box>
      <Box display="flex" alignItems={'center'}>
        {' '}
        <Tooltip title="Darkmode">
          <IconButton onClick={handleDarkModeButton}>
            {palette.mode === 'dark' ? (
              <NightlightRoundOutlinedIcon />
            ) : (
              <NightlightOutlinedIcon />
            )}
          </IconButton>
        </Tooltip>
        <Tooltip title="Notifications">
          <IconButton onClick={handleNotificationsButton}>
            {notificationMenu ? (
              <NotificationsIcon />
            ) : (
              <NotificationsNoneOutlinedIcon />
            )}
          </IconButton>
        </Tooltip>
        <Tooltip title="Team contacts">
          <Link to="/team">
            <IconButton onClick={handlePersonButton}>
              <PersonOutlineOutlinedIcon />
            </IconButton>
          </Link>
        </Tooltip>
        <Tooltip title="Settings">
          <IconButton onClick={handleSettingsButton}>
            <SettingsOutlinedIcon />
          </IconButton>
        </Tooltip>
      </Box>
      {notificationMenu && <NotificationMenu />}
      {showSettings && <Settings />}
    </Box>
  )
}

export default TopBar
