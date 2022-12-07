import React from 'react'
import { useParams } from 'react-router-dom'
import { mockDataMessages } from '../../data/mockData'
import MessageItem from '../../components/MessageItem'

const Message = () => {
  const { id } = useParams()
  if (!id) {
    return 'Loading...'
  }

  const messageFound = mockDataMessages.find((msg) => {
    return msg.id === parseInt(id)
  })

  if (!messageFound) {
    return
  }
  const { name, email, message, date } = messageFound

  return (
    <MessageItem
      name={name}
      email={email}
      message={message}
      date={date}
      id={id}
    />
  )
}

export default Message
