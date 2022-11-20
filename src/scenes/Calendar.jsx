import React, {useState} from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import {Box, Typography} from '@mui/material'

const Calendar = () => {
  return (
    <Box>
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
      />
    </Box>
  )
}

export default Calendar