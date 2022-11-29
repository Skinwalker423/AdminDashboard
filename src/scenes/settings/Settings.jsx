import React from 'react'
import{Box, Typography, IconButton} from '@mui/material'
import { useColors } from '../../hooks'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';


const Settings = () => {

    const {colors} = useColors();

  return (
    <Box
        position='absolute'
        top='65px'
        right='20px'
        height='25vh'
        width='10%'
        border='2px solid white'
        backgroundColor={colors.gray[800]}
        zIndex='99'
        sx={{
            '& :hover': {
                color: colors.greenAccent[400]
            },
            
        }}
    >
        <Box 
            borderBottom={'2px solid white'}
            m='20px'
            display='flex'
            justifyContent={'space-between'}
            alignItems={'center'}
            
        >
            <Typography
                color={colors.gray[100]}
                variant={'h4'}
                
            >
                Profile
            </Typography>
            <IconButton>
                <PersonOutlineOutlinedIcon />
            </IconButton>
        </Box>
        <Box 
            borderBottom={'2px solid white'}
            m='20px'
            display='flex'
            justifyContent={'space-between'}
            alignItems={'center'}
        >
            <Typography
                color={colors.gray[100]}
                variant={'h4'}
                
            >
                Profile
            </Typography>
            <IconButton>
                <PersonOutlineOutlinedIcon />
            </IconButton>
        </Box>
        <Box 
            borderBottom={'2px solid white'}
            m='20px'
            display='flex'
            justifyContent={'space-between'}
            alignItems={'center'}
        >
            <Typography
                color={colors.gray[100]}
                variant={'h4'}
                
            >
                Profile
            </Typography>
            <IconButton>
                <PersonOutlineOutlinedIcon />
            </IconButton>
        </Box>
    </Box>
  )
}

export default Settings