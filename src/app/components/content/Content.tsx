"use client";
import React from "react";
import { Typography,useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import Image from "next/image";
import styles from "../../page.module.css";

export default function Content() {
  const theme = useTheme();
  return (
    <div>
      <Image
        src="/images/background.jpg"
        height={600}
        width={800}
        alt="bg image"
        className={styles.background}
      />
      <div className={styles.content}>
        <Typography variant="h2">WELCOME TO BON HOTEL</Typography>
        <Typography variant="subtitle1">
          Good people. Good thinking. Good feeling.
        </Typography>
        <Button
          variant="contained"
          style={{ backgroundColor: theme.palette.secondary.main }}
          className={styles.button}
        >
          Explore
        </Button>
      </div>
    </div>
  );
}
