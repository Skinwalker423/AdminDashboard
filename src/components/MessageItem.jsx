import React from 'react'
import { useColors } from '../hooks'
import { Box, Typography, IconButton, Button } from '@mui/material';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';

const MessageItem = ({name, email, date, message, id}) => {

  const {colors} = useColors();

  return (
    <Box m='100px' display={'flex'} justifyContent='center' flexDirection='column'>
        <Box>
            <Box>
                <Typography variant={'h3'}>
                    {`From: ${name}`}
                </Typography>
                <Typography variant={'h5'}>
                    {`email: ${email}`}
                </Typography>
                <Typography>
                    {`Date: ${date}`}
                </Typography>
            </Box>
            
        </Box>
        <Box mt='50px'>
           <Typography variant={'h2'} color={colors.greenAccent[600]}>
            {message}
           </Typography>
        </Box>
        
        <Box display='flex' justifyContent='center' alignItems='center' sx={{
            backgroundColor: colors.gray[100],
            color: colors.greenAccent[600],
            width: '6rem', 
            mt: '20px',
            height: '3rem',
            borderRadius: '4px',
            '& :hover': {
                backgroundColor: colors.greenAccent[600],
                color: colors.gray[100],
            }
            }}>
            <Box
                display='flex'
                height='100%'
                width='100%'
                justifyContent='center'
                alignItems='center'
                borderRadius='4px'
            >
                <ReplyOutlinedIcon />
                <Typography>
                    Reply
                </Typography>
            </Box>
        </Box>
       
    </Box>
  )
}

export default MessageItem

