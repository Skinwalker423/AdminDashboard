import {Typography, Box} from '@mui/material';
import { useColors } from '../hooks';

const Header = ({title, subTitle}) => {
 
    const {colors} = useColors();

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