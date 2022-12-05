import React from 'react'
import {Box} from '@mui/material';
import { mockDataMessages } from '../../data/mockData'
import NotificationItem from '../../components/NotificationItem';
import Header from '../../components/Header';

const Messages = () => {


  return (
    <Box m='20px'>
      <Header title='MESSAGES' subTitle='list of all correspondence' />
      <Box mt='50px'>
        {mockDataMessages.map(({id, name, email, message, date}) => {
          return (
            <NotificationItem
              key={id}
              id={id}
              name={name}
              email={email}
              message={message}
              date={date}
              color={true}
             />
          )
        })}
      </Box>
    </Box>
  )
}

export default Messages