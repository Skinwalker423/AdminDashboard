import React from 'react'
import { Box, Typography } from '@mui/material'
import { useColors } from '../hooks';
import { Link } from 'react-router-dom';


const NotificationItem = ({message, name, email, date, id}) => {

  const {colors} = useColors();


  return (
	<Box m='10px' 
			borderBottom={`2px solid ${colors.greenAccent[100]}`}
			borderRadius='4px'
			sx={{
				'& .MuiBox-root:hover': {
					backgroundColor: colors.greenAccent[100],
				}
			}}
		>
		<Link to={`/messages/${id}`} style={{
			textDecoration: 'none',
		}}>
			<Box>
				<Box>
					<Typography color={colors.greenAccent[600]}>
						{`From: ${name}`}
					</Typography>
					<Typography color={colors.primary[400]}>
						{date}
					</Typography>
				</Box>
				<Box>
					<Typography color={colors.primary[400]}>
						{message}
					</Typography>
				</Box>
			</Box>
		</Link>
	</Box>
  )
}

export default NotificationItem