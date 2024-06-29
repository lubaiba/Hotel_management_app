'use client';
import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import styles from "../../page.module.css";
import { useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import Rooms from './Rooms';
export default function Textcontent() {
    const theme=useTheme();
  return (
    <div>
      <Box sx={{ width: '100%'}} style={{color:theme.palette.secondary.dark}} className={styles.room} >
    <Typography variant='h4'>Rooms & Rates</Typography>
    </Box>
    <Rooms/>
    <Box sx={{ width: '100%'}} style={{color:theme.palette.secondary.dark}} className={styles.room}>
    <Typography variant='h4'>Get a room already!</Typography>
    <Button variant="contained" style={{backgroundColor:theme.palette.secondary.main}} className={styles.button}>Book Now</Button>
    </Box>
    
    </div>
  )
}
