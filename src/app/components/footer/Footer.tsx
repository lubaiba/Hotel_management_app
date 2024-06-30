"use client";
import * as React from "react";
import { styled, useTheme ,Typography} from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import styles from "../../page.module.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Footer() {
    const theme=useTheme();
  return (
    <Box sx={{ flexGrow: 1 }} className={styles.footer} id='contactus'>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Item className={styles.footercontent}>
            <Image
              src="/images/logobon.png"
              width={60}
              height={60}
              alt="logo"
            />
            <Typography variant="subtitle1">
              Bon Hotels Head Office
              <br />
              +27 434 344 432
              <br />
              info@bonhotels.com
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item className={styles.footlinks}>
            <Typography variant="subtitle1">Our Hotels</Typography>
            <Typography variant="subtitle1">Our Conferencing</Typography>
            <Typography variant="subtitle1">Our Company</Typography>
            <Typography variant="subtitle1">Hotel Design</Typography>
            <Typography variant="subtitle1">Careers</Typography>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item className={styles.contact}>
          <Typography variant="subtitle1">Subscribe for Offers</Typography>
          <TextField id="outlined-basic" label="Email Address" variant="outlined" className={styles.text} />
          <Button variant="contained" style={{backgroundColor:theme.palette.secondary.main}} className={styles.subscribe}>Subscribe Now</Button>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
