import React from 'react'
import {Box, Button, TextField, useMediaQuery} from '@mui/material';
import { Formik } from 'formik';
import Header from '../components/Header';
import * as yup from 'yup';

  const phoneRegEx = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

  const initialValues = {
    email: '', 
    password: '',
    firstName: '',
    lastName: '',
    contact: '',
    address1: '',
    address2: '',
  }

  const userSchema = yup.object().shape({
    firstName: yup.string().required('name required'),
    lastName: yup.string().required('last name required'),
    email: yup.string().email('invalid email').required('email required'),
    password: yup.string().required('password required'),
    contact: yup.string().matches(phoneRegEx, 'phone number not valid').required('required'),
    address1: yup.string().required('required'),
    address2: yup.string().required('required'),

  })



const Form = () => {

  const isNotMobile = useMediaQuery("(min-width: 600px)");

  const handleFormSubmit = () => {
    console.log('form submitted');
  }

  return (
    <Box m='20px'>
      <Header title="CREATE USER" subTitle='Create a user profile'  />
      <Formik
       initialValues={initialValues}
       validationSchema={userSchema}
       onSubmit={handleFormSubmit}
       >
        {({errors, touched, values, handleBlur, handleChange, handleSubmit}) => {
          return (
            <form onSubmit={handleSubmit}>
              <Box 
                display='grid' 
                gap='30px' 
                gridTemplateColumns='repeat(4, minmax(0, 1fr))' 
                sx={{
                  '& > div': {gridColumn: isNotMobile ? undefined : 'span 4'}
                }}
              >
                <TextField
                  fullWidth
                  variant='filled'
                  type='text'
                  label='First Name'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  name='firstName'
                 />
                <TextField
                  fullWidth
                  variant='filled'
                  type='text'
                  label='Last Name'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  name='lasttName'
                 />
              </Box>
              
            </form>
          )
        }}
      </Formik>
    </Box>
  )
}

export default Form