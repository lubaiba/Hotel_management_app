import * as React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { Typography } from '@mui/material';
import styles from "../../page.module.css";
import Link from 'next/link';

export default function Nav() {
  return (
    <Box
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
   className={styles.nav} >
      <Box>
      <Image
              src="/images/download 1.png"
              width={150}
              height={100}
              alt="kitchen"
            />
      </Box>
      <Box className={styles.navlink}>
      <Link href="/" className={styles.navlink}><Typography variant="h6">Our Hotel</Typography></Link>
            <Link href="/roomsrates" className={styles.navlink}><Typography variant="h6">Rooms & Rates</Typography></Link>
            <Link href="#facilities" className={styles.navlink}><Typography variant="h6">Facilities</Typography></Link>
            <Link href="#contactus" className={styles.navlink}><Typography variant="h6">Contact Us</Typography></Link>
            <Typography variant="h6"> <Image
              src="/icons/bi_search.svg"
              width={15}
              height={15}
              alt="kitchen"
            /></Typography>
            </Box>
    </Box>
  );
}
