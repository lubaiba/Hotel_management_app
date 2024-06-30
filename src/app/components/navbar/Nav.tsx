import * as React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Image from "next/image";
import styles from "../../page.module.css";

export default function Nav() {
  return (
    <Box
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      className={styles.nav}
    >
      <Box>
        <Image src="/images/logo.png" width={150} height={100} alt="logo" />
      </Box>
      <Box className={styles.navlink}>
        <Link href="/" className={styles.navlink}>
          <Typography variant="h6">Our Hotel</Typography>
        </Link>
        <Link href="/roomsrates" className={styles.navlink}>
          <Typography variant="h6">Rooms & Rates</Typography>
        </Link>
        <Link href="#facilities" className={styles.navlink}>
          <Typography variant="h6">Facilities</Typography>
        </Link>
        <Link href="#contactus" className={styles.navlink}>
          <Typography variant="h6">Contact Us</Typography>
        </Link>
        <Typography variant="h6">
          {" "}
          <Image src="/images/search.svg" width={15} height={15} alt="search" />
        </Typography>
      </Box>
    </Box>
  );
}
