import { React, useState } from "react";
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";

const Search = () => {
    return (
      <div>
      <Box
       component="form"
       sx={{
         '& .MuiTextField-root': {m:1,   width: '25ch' },
       }}
       noValidate
       autoComplete="off"
      
     >  <div>
       <TextField
     id="outlined-multiline-static"
     label="Search"
     multiline
     rows={1}
     />
   </div>
   </Box>
   </div>
    );
  };
  export default Search