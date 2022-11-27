import React from 'react'
import { Box, Typography } from '@mui/material'
import { useColors } from '../hooks';
import { Link } from 'react-router-dom';


const NotificationItem = ({message, name, email, date, id}) => {

  const {colors} = useColors();


  return (
	<Link to={`/messages/${id}`}>
		<Box m='10px'>
			<Box>
			<Typography color={colors.gray[100]}>
				{`From: ${name}`}
			</Typography>
			<Typography color={colors.gray[100]}>
				{date}
			</Typography>

			</Box>
			<Typography>
				{message}
			</Typography>
		</Box>
	</Link>
  )
}

export default NotificationItem