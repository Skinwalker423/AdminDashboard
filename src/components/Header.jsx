import {Typography, Box, useTheme} from '@mui/material';
import { tokens } from '../theme';

const Header = ({title, subTitle}) => {

    const {palette} = useTheme();
    const colors = tokens(palette.mode);

    return (
        <Box>
            <Typography
                variant='h2'
                color={colors.gray[100]}
                fontWeight='bold'
                sx={{mb: '5px'}}
            >{title}</Typography>
            <Typography
                variant='h5'
                color={colors.greenAccent[400]}
            >{subTitle}</Typography>
            
        </Box>
    )
}

export default Header;