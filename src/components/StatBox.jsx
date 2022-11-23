import React from 'react'
import ProgressCircle from './ProgressCircle'
import { Box, useTheme, Typography } from '@mui/material'
import { tokens } from '../theme'


const StatBox = ({title, subTitle, icon, progress, increase}) => {

  const {palette} = useTheme();  
  const colors = tokens(palette.mode);

  return (
    <Box width='100%' m='0 30px'>
        <Box display='flex' justifyContent='space-between'>
            <Box>
                {icon}
                <Typography
                    variant='h4'
                    fontWeight='bold'
                    sx={{
                        color: colors.gray[100]
                    }}
                 >
                    {title}
                </Typography>
            </Box>
            <Box>
                <ProgressCircle
                    progress={progress}
                 />
            </Box>
            <Box display='flex' justifyContent='space-between'>          
                <Typography
                    variant='h5'
                    sx={{
                        color: colors.greenAccent[500]
                    }}
                    >
                    {subTitle}
                </Typography>
                <Typography
                    variant='h5'
                    fontStyle='italic'
                    sx={{
                        color: colors.greenAccent[600]
                    }}
                    >
                    {increase}
                </Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default StatBox