import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from '@mui/material/Button';
import { AiOutlineCalendar } from 'react-icons/ai';

const Datepicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
      <div>
      <a onClick={handleOpen}><AiOutlineCalendar/> </a>
      <DatePicker
        showIcon
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
     
      </div>
    );
  };
  export default Datepicker