"use client";
import * as React from "react";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material";
import BasicDatePicker from "../Datepicker";
import styles from "../../page.module.css";

export default function Subnav() {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  const theme = useTheme();
  return (
    <div
      style={{ backgroundColor: theme.palette.primary.main }}
      className={styles.subnav}
    >
      <FormControl
        required
        sx={{ m: 1, minWidth: 150 }}
        className={styles.form}
      >
        <InputLabel id="demo-simple-select-required-label">
          Select a City
        </InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={age}
          label="City *"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Calicut</MenuItem>
          <MenuItem value={20}>Kochi</MenuItem>
          <MenuItem value={30}>Kannur</MenuItem>
        </Select>
      </FormControl>
      <BasicDatePicker />
      <Button
        variant="contained"
        style={{ backgroundColor: theme.palette.secondary.main }}
      >
        Check Availability
      </Button>
    </div>
  );
}
