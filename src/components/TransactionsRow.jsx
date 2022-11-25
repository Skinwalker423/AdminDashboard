import React from 'react'
import {Box, Typography, useTheme} from '@mui/material';
import { tokens } from '../theme';
import { mockTransactions } from '../data/mockData';



const TransactionsRow = () => {

  const {palette} = useTheme();
  const colors = tokens(palette.mode);


  return (
    <Box 
        gridColumn={'span 4'} 
        gridRow='span 2' 
        backgroundColor={colors.primary[400]}
        overflow='auto'
    >
    <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        borderBottom={`4px solid ${colors.primary[500]}`}
        colors={colors.gray[100]}
        p='15px'
    >
        <Typography 
        color={colors.gray[100]}
        variant='h5'
        fontWeight='600'
        >
        Recent Transactions
        </Typography>            
    </Box>
    {mockTransactions.map((trans, index) => {
        return (
        <Box
            key={`${trans.txId}-${index}`}
            justifyContent='space-between'
            alignItems='center'
            borderBottom={`4px solid ${colors.primary[500]}`}
            p='15px'
            
        >
            <Box display='flex' justifyContent='space-between'>
            <Box>
                <Typography>
                {trans.txId}
                </Typography>
                <Typography color={colors.greenAccent[500]}>
                {trans.user}
                </Typography>
            </Box> 
            <Box
                color={colors.gray[100]}
                display='flex'
                alignItems='center'
            >
                {trans.date}
            </Box>   
            <Box
                backgroundColor={colors.greenAccent[600]}
                p='5px 10px'
                borderRadius='4px'
                display='flex'
                alignItems='center'
                
            >
                {`$${trans.cost}`}
            </Box>  
            </Box>  
        </Box>
        )
    })}
    </Box>
)
}

export default TransactionsRow