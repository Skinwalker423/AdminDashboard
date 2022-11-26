import React from 'react'
import {
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Box, 
  Typography,
} from '@mui/material'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from '../components/Header';
import { useColors } from '../hooks';

const FAQ = () => {

  const {colors} = useColors();

  return (
    <Box m='20px'>
      <Header title='FAQ' subTitle='Frequently asked questions and answers' />
      <Box m='10px 0' >
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} >
            <Typography variant='h5' colors={colors.greenAccent[500]}>
              What is an Accordian?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              This
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box m='10px 0' >
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} >
            <Typography variant='h5' colors={colors.greenAccent[500]}>
              What is an Accordian?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              This
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box m='10px 0' >
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} >
            <Typography variant='h5' colors={colors.greenAccent[500]}>
              What is an Accordian?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              This
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box m='10px 0' >
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} >
            <Typography variant='h5' colors={colors.greenAccent[500]}>
              What is an Accordian?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              This
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box m='10px 0' >
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} >
            <Typography variant='h5' colors={colors.greenAccent[500]}>
              What is an Accordian?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              This
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box m='10px 0' >
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} >
            <Typography variant='h5' colors={colors.greenAccent[500]}>
              What is an Accordian?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              This
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  )
}

export default FAQ