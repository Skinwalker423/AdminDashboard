import React, {useState} from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import {
  Box, 
  Typography, 
  List, 
  ListItem, 
  ListItemText, 
  useTheme
} from '@mui/material'
import Header from '../components/Header'
import { tokens } from '../theme'

const Calendar = () => {

  const {palette} = useTheme();
  const colors = tokens(palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("enter title");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if(title){
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      })
    }
  }

  const handleEventClick = (selected) => {
    if(window.confirm(`Are you sure you want to remove event ${selected.event.title}`)){
      selected.event.remove();
    }
  }

  return (
    <Box>
      <Header title='CALENDAR' subTitle='schedule appointments and events' />
      <FullCalendar
        plugins={
          [ 
            dayGridPlugin, 
            timeGridPlugin, 
            listPlugin, 
            interactionPlugin
           ]
        }
        initialView="dayGridMonth"
      />
    </Box>
  )
}

export default Calendar