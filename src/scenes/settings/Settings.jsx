import React from 'react'
import { Box } from '@mui/material'
import { useColors } from '../../hooks'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsItem from '../../components/SettingsItem';


const Settings = () => {

    const { colors } = useColors();

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
            <SettingsItem
                title='Profile'
                icon={<PersonOutlineOutlinedIcon />}
            />
            <SettingsItem
                title='Profile'
                icon={<PersonOutlineOutlinedIcon />}
            />
            <SettingsItem
                title='Profile'
                icon={<PersonOutlineOutlinedIcon />}
            />
            <SettingsItem
                title='Profile'
                icon={<PersonOutlineOutlinedIcon />}
            />
        </Box>
    )
}

export default Settings