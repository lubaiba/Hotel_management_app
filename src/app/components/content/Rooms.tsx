'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Typography,useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import styles from "../../page.module.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Rooms() {
    const theme=useTheme();
  return (
    <>
      <Grid container spacing={{ xs: 2, md:3 }} columns={{ xs: 4, sm: 8, md: 12 }} rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 3 }}  className={styles.rooms}> 
        <Grid item xs={6}>
          <Item className={styles.item1}>
            <div className={styles.roomtext}>
          <Typography variant='h4'>Standard Twin Room</Typography>
          <Button variant="contained" style={{backgroundColor:theme.palette.secondary.main}}>Check Rates</Button>
          </div>
          </Item>
        </Grid>
        <Grid item xs={6}>
        <Item className={styles.item2}>
            <div className={styles.roomtext}>
          <Typography variant='h4'>Standard Room</Typography>
          <Button variant="contained" style={{backgroundColor:theme.palette.secondary.main}}>Check Rates</Button>
          </div>
          </Item>
              </Grid>
              <Grid item xs={6}>
          <Item className={styles.item3}>
            <div className={styles.roomtext}>
          <Typography variant='h4'>Standard View Room</Typography>
          <Button variant="contained" style={{backgroundColor:theme.palette.secondary.main}}>Check Rates</Button>
          </div>
          </Item>
        </Grid>
        <Grid item xs={6}>
        <Item className={styles.item4}>
            <div className={styles.roomtext}>
          <Typography variant='h4'>Deluxe Room</Typography>
          <Button variant="contained" style={{backgroundColor:theme.palette.secondary.main}}>Check Rates</Button>
          </div>
          </Item>
          </Grid>
      </Grid>
    </>
  );
}
