"use client";
import React from "react";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

export default function AppThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#000000",
      },
      secondary: {
        main: "#DFAA5B",
        dark: "#957554",
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
