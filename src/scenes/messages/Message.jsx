import React from 'react'
import { useParams } from 'react-router-dom'
import { mockDataMessages } from '../../data/mockData';
import {Box, Typography} from '@mui/material'
import { useColors } from '../../hooks';

const Message = () => {

    const {id} = useParams();
    const {colors} = useColors();

    const messageFound = mockDataMessages.find((msg) => {
        console.log(msg.id);
        return msg.id === parseInt(id);
    });
    console.log(messageFound)

    if(!messageFound){
        return;
    }
    const {name,email, message, date} = messageFound;

  return (
    <Box m='100px'>
        <Box display={'flex'} justifyContent='space-between'>
            <Box>
                <Typography variant={'h3'}>
                    {`From: ${name}`}
                </Typography>
                <Typography variant={'h5'}>
                    {`email: ${email}`}
                </Typography>
            </Box>
            <Box>
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

    </Box>
  )
}

export default Message