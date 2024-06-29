'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import styles from "../../page.module.css";

export default function Facilities() {
    const theme=useTheme();
  return (
    <Box className={styles.facilities} id="facilities">
      <Typography variant='h4' style={{color:theme.palette.secondary.dark}}>Facilities</Typography>
      <Box className={styles.facilitiescontent}>
      <Box sx={{ flexGrow: 1 }}>
        <Image src="/icons/dashicons_editor-kitchensink.png" width={60} height={60} alt="kitchen" />
        <Typography variant='subtitle1'>Kitchen</Typography>
      </Box>
      <Box>
        <Image src="/icons/ic_twotone-pool.png" width={60} height={60} alt="kitchen" />
        <Typography variant='subtitle1'>Pool</Typography>
      </Box>
      <Box>
        <Image src="/icons/clarity_wifi-solid.png" width={60} height={60} alt="kitchen" />
        <Typography variant='subtitle1'>Wifi</Typography>
      </Box>
      <Box>
        <Image src="/icons/maki_fitness-centre-11.png" width={60} height={60} alt="kitchen" />
        <Typography variant='subtitle1'>Gym</Typography>
      </Box>
      <Box>
        <Image src="/icons/bx_bx-taxi.png" width={60} height={60} alt="kitchen" />
        <Typography variant='subtitle1'>Taxi</Typography>
      </Box>
    </Box>
    </Box>
  );
}
