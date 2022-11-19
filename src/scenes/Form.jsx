import React from 'react'
import {Box, Button, TextField, useMediaQuery, useTheme} from '@mui/material';
import { Formik } from 'formik';
import Header from '../components/Header';
import * as yup from 'yup';
import { tokens } from '../theme';


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

  const {palette} = useTheme();
  const colors = tokens(palette.mode);

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
                mt='20px' 
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
                  error={!!touched.firstName && !!errors.firstName}
                  helperText={touched.firstName && errors.firstName}
                  sx={{gridColumn: 'span 2'}}
                 />
                <TextField
                  fullWidth
                  variant='filled'
                  type='text'
                  label='Last Name'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  name='lastName'
                  error={!!touched.lastName && !!errors.lastName}
                  helperText={touched.lastName && errors.lastName}
                  sx={{gridColumn: 'span 2'}}
                 />
                <TextField
                  fullWidth
                  variant='filled'
                  type='text'
                  label='Address1'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.address1}
                  name='address1'
                  error={!!touched.address1 && !!errors.address1}
                  helperText={touched.address1 && errors.address1}
                  sx={{gridColumn: 'span 4'}}
                 />
                <TextField
                  fullWidth
                  variant='filled'
                  type='text'
                  label='Address2'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.address2}
                  name='address2'
                  error={!!touched.address2 && !!errors.address2}
                  helperText={touched.address2 && errors.address2}
                  sx={{gridColumn: 'span 4'}}
                 />
                <TextField
                  fullWidth
                  variant='filled'
                  type='text'
                  label='Phone Number'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.contact}
                  name='contact'
                  error={!!touched.contact && !!errors.contact}
                  helperText={touched.contact && errors.contact}
                  sx={{gridColumn: 'span 4'}}
                 />
                <TextField
                  fullWidth
                  variant='filled'
                  type='email'
                  label='Email'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name='email'
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  sx={{gridColumn: 'span 4'}}
                 />
                <TextField
                  fullWidth
                  variant='filled'
                  type='password'
                  label='Password'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  name='password'
                  error={!!touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                  sx={{gridColumn: 'span 4'}}
                 />
              </Box>
              <Box display='flex' justifyContent='end' mt='20px'>
                <Button 
                  variant='contained' 
                  type='submit'
                  color={'secondary'}
                >
                  Submit
                </Button>
              </Box>
            </form>
          )
        }}
      </Formik>
    </Box>
  )
}

export default Form