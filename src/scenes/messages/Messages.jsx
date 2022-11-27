import React from 'react'
import { Outlet } from 'react-router-dom'

const Messages = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default Messages