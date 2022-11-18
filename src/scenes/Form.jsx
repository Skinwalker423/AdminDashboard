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
    LastName: '',
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
       >
     </Formik>
    </Box>
  )
}

export default Form