import React from 'react'
import { Box } from '@mui/material'
import { useColors } from '../hooks';
import NotificationItem from './NotificationItem';

const NotificationMenu = () => {

  const {colors} = useColors();

  return (
    <Box
			position='absolute'
			top='65px'
			right='90px'
			width='250px'
			height='500px'
			overflow='auto'
			border='2px solid white'
			zIndex={99}
			backgroundColor={colors.greenAccent[700]}
			borderRadius='4px'
    >
		<NotificationItem />
		<NotificationItem />
		<NotificationItem />
		<NotificationItem />
		<NotificationItem />
		<NotificationItem />
		<NotificationItem />
		<NotificationItem />
		<NotificationItem />	
    </Box>
  )
}

export default NotificationMenu