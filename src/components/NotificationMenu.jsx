import React from 'react'
import { Box, Menu, MenuItem } from '@mui/material'
import { useColors } from '../hooks';
import NotificationItem from './NotificationItem';
import { mockDataMessages } from '../data/mockData';

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
			backgroundColor={'white'}
			borderRadius='4px'
    >
		
		{mockDataMessages.map(({id, name, email, message, date}) => {
			return (
					<NotificationItem
						key={id}
						id={id}
						name={name}
						email={email}
						message={message}
						date={date}
					/>
				
			)
		})}
    </Box>
  )
}

export default NotificationMenu