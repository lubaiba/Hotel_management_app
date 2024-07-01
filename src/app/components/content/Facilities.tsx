'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import styles from "../../page.module.css";

const facilities = [
  { src: "/images/kitchen.png", name: "Kitchen" },
  { src: "/images/pool.png", name: "Pool" },
  { src: "/images/wifi.png", name: "Wifi" },
  { src: "/images/gym.png", name: "Gym" },
  { src: "/images/taxi.png", name: "Taxi" },
];

export default function Facilities() {
  const theme=useTheme();
  return (
    <Box className={styles.facilities} id="facilities">
      <Typography variant='h3' style={{color:theme.palette.secondary.dark}}>Facilities</Typography>
      <Box className={styles.facilitiescontent}>
      {
        facilities?.map((facility,index)=>(
          <Box sx={{flexGrow:1}} key={index}>
          <Image src={facility.src} width={60} height={60} alt={facility.name}/>
          <Typography variant='subtitle1'>{facility.name}</Typography>
        </Box>
        ))
      }
    </Box>
    </Box>
  );
}
