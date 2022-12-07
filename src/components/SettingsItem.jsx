import React from 'react'
import { Box, Typography, IconButton } from '@mui/material'
import { useColors } from '../hooks'

const SettingsItem = ({ title, icon }) => {
  const { colors } = useColors()

  return (
    <Box
      borderBottom={'2px solid white'}
      m="20px"
      display="flex"
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Typography color={colors.gray[100]} variant={'h4'}>
        {title}
      </Typography>
      <IconButton>{icon}</IconButton>
    </Box>
  )
}

export default SettingsItem
