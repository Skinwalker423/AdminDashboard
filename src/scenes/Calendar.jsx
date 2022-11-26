import React, {useState} from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react' // must go before plugins
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
} from '@mui/material'
import Header from '../components/Header'

import { useColors } from '../hooks'

const Calendar = () => {

  const {colors, palette} = useColors();
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
    <Box m='20px'>
      <Header title='CALENDAR' subTitle='schedule appointments and events' />
      <Box display='flex' justifyContent='space-between' >
        <Box 
          flex='1 1 20%'
          backgroundColor={colors.primary[400]}
          p='15px'
          borderRadius='4px'
          border='2px solid white'

        >
          <Typography variant='h5'>Events</Typography>
          <List>
            {currentEvents.map((event) => {
              return (
                <ListItem
                  key={event.id}
                  sx={{
                    backgroundColor: colors.greenAccent[500],
                    margin: '10px 0',
                    borderRadius: '2px',
                  }}
                >
                  <ListItemText
                    primary={event.title}
                    secondary={
                      <Typography>
                      {formatDate(event.start, {
                        year: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                      </Typography>
                    }
                  />  
                </ListItem>
              )
            })}
          </List>
        </Box>
        <Box flex='1 1 100%' ml='20px'>
          <FullCalendar
            height={'80vh'}
            plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: "dayGridMonth,timeGridWeek,listWeek,dayGridWeek",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
              id: '1234',
              title: 'All-day event',
              date: '2022-11-25',
              },
              {
              id: 'event2',
              title: 'meeting',
              date: '2022-11-26',
              },
              {
              id: 'event3',
              title: 'party',
              date: '2022-11-27',
              },
          ]}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Calendar