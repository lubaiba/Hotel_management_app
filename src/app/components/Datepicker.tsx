import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import styles from "../page.module.css";

export default function BasicDatePicker() {
  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Check in" className={styles.form}/>
      </DemoContainer>
    </LocalizationProvider>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DemoContainer components={['DatePicker']}>
      <DatePicker label="Check out" className={styles.form}/>
    </DemoContainer>
  </LocalizationProvider>
  </>
  );
}
