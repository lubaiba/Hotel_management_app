"use client";
import * as React from "react";
import { Typography, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import styles from "../../page.module.css";

export default function Rooms() {
  const theme = useTheme();
  return (
    <>
      <div style={{ marginTop: "350px", padding: "20px" }}>
        <Box
          sx={{ width: "100%" }}
          style={{ color: theme.palette.secondary.dark }}
          className={styles.room}
        >
          <Typography variant="h3">Rooms & Rates</Typography>
        </Box>
        <div className={styles.rooms}>
          <div className={styles.item1}>
            <div className={styles.roomtext}>
              <Typography variant="h4">Standard Twin Room</Typography>
              <Button
                variant="contained"
                style={{ backgroundColor: theme.palette.secondary.main }}
              >
                Check Rates
              </Button>
            </div>
          </div>
          <div className={styles.item2}>
            <div className={styles.roomtext}>
              <Typography variant="h4">Standard Room</Typography>
              <Button
                variant="contained"
                style={{ backgroundColor: theme.palette.secondary.main }}
              >
                Check Rates
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.rooms}>
          <div className={styles.item3}>
            <div className={styles.roomtext}>
              <Typography variant="h4">Standard View Room</Typography>
              <Button
                variant="contained"
                style={{ backgroundColor: theme.palette.secondary.main }}
              >
                Check Rates
              </Button>
            </div>
          </div>
          <div className={styles.item4}>
            <div className={styles.roomtext}>
              <Typography variant="h4">Deluxe Room</Typography>
              <Button
                variant="contained"
                style={{ backgroundColor: theme.palette.secondary.main }}
              >
                Check Rates
              </Button>
            </div>
          </div>
        </div>
        <Box
          sx={{ width: "100%" }}
          style={{ color: theme.palette.secondary.dark }}
          className={styles.textbutton}
        >
          <Typography variant="h4">Get a room already!</Typography>
          <Button
            variant="contained"
            style={{ backgroundColor: theme.palette.secondary.main }}
            className={styles.button}
          >
            Book Now
          </Button>
        </Box>
      </div>
    </>
  );
}
