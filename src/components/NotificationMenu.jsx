import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../theme'

const NotificationMenu = () => {

	const {palette} = useTheme();
  const colors = tokens(palette.mode);

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
			<Box>
				<Typography color={colors.gray[100]}>
					message 1
				</Typography>
				<Typography>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iusto, eaque unde aspernatur corrupti quidem illo cum provident nemo autem! Vero impedit enim vitae facere, consequuntur numquam adipisci atque blanditiis!
				</Typography>
			</Box>
			<Box>
				<Typography color={colors.gray[100]}>
					message 2
				</Typography>
				<Typography>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iusto, eaque unde aspernatur corrupti quidem illo cum provident nemo autem! Vero impedit enim vitae facere, consequuntur numquam adipisci atque blanditiis!
				</Typography>
			</Box>
			<Box>
				<Typography color={colors.gray[100]}>
					message 2
				</Typography>
				<Typography>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iusto, eaque unde aspernatur corrupti quidem illo cum provident nemo autem! Vero impedit enim vitae facere, consequuntur numquam adipisci atque blanditiis!
				</Typography>
			</Box>
			<Box>
				<Typography color={colors.gray[100]}>
					message 2
				</Typography>
				<Typography>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iusto, eaque unde aspernatur corrupti quidem illo cum provident nemo autem! Vero impedit enim vitae facere, consequuntur numquam adipisci atque blanditiis!
				</Typography>
			</Box>
			<Box>
				<Typography color={colors.gray[100]}>
					message 2
				</Typography>
				<Typography>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iusto, eaque unde aspernatur corrupti quidem illo cum provident nemo autem! Vero impedit enim vitae facere, consequuntur numquam adipisci atque blanditiis!
				</Typography>
			</Box>
			<Box>
				<Typography color={colors.gray[100]}>
					message 2
				</Typography>
				<Typography>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iusto, eaque unde aspernatur corrupti quidem illo cum provident nemo autem! Vero impedit enim vitae facere, consequuntur numquam adipisci atque blanditiis!
				</Typography>
			</Box>
			<Box>
				<Typography color={colors.gray[100]}>
					message 2
				</Typography>
				<Typography>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iusto, eaque unde aspernatur corrupti quidem illo cum provident nemo autem! Vero impedit enim vitae facere, consequuntur numquam adipisci atque blanditiis!
				</Typography>
			</Box>
			<Box>
				<Typography color={colors.gray[100]}>
					message 2
				</Typography>
				<Typography>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iusto, eaque unde aspernatur corrupti quidem illo cum provident nemo autem! Vero impedit enim vitae facere, consequuntur numquam adipisci atque blanditiis!
				</Typography>
			</Box>
    </Box>
  )
}

export default NotificationMenu