import React from 'react'
import {Box, Typography} from '@mui/material';
import { mockDataMessages } from '../../data/mockData'
import { useColors } from '../../hooks';
import NotificationItem from '../../components/NotificationItem';

const Messages = () => {

  const {colors} = useColors();

  return (
    <Box m='20px' backgroundColor={colors.gray[100]}>
      <Box>
        {mockDataMessages.map(({id, name, email, message, date}) => {
          return (
            <NotificationItem
              key={id}
              id={id}
              name={name}
              email={email}
              message={message}
              date={date}
             />
          )
        })}
      </Box>
    </Box>
  )
}

export default Messages