import React from 'react'
import { Box } from '@mui/material'
import { useColors } from '../../hooks'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import SettingsItem from '../../components/SettingsItem'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'

const Settings = () => {
  const { colors } = useColors()

  return (
    <Box
      position="absolute"
      top="65px"
      right="20px"
      height="25vh"
      width="10%"
      border="2px solid white"
      backgroundColor={colors.gray[800]}
      zIndex="99"
      sx={{
        '& :hover': {
          color: colors.greenAccent[400],
        },
      }}
    >
      <SettingsItem title="User Profile" icon={<PersonOutlineOutlinedIcon />} />
      <SettingsItem title="Notifications" icon={<ContactsOutlinedIcon />} />
      <SettingsItem title="General" icon={<HomeOutlinedIcon />} />
      <SettingsItem title="Reports" icon={<ReceiptLongOutlinedIcon />} />
      <SettingsItem title="Security" icon={<HelpOutlineOutlinedIcon />} />
    </Box>
  )
}

export default Settings
