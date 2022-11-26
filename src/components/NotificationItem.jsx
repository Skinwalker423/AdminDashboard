import React from 'react'
import { Box, Typography } from '@mui/material'
import { useColors } from '../hooks';

const NotificationItem = () => {

  const {colors} = useColors();

  return (
    <Box m='10px'>
			<Typography color={colors.gray[100]}>
					message 1
			</Typography>
			<Typography>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iusto, eaque unde aspernatur corrupti quidem illo cum provident nemo autem! Vero impedit enim vitae facere, consequuntur numquam adipisci atque blanditiis!
			</Typography>
		</Box>
  )
}

export default NotificationItem