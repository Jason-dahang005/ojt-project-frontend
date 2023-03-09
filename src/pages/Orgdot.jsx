import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { AiOutlineUserAdd } from 'react-icons/ai';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { RxDotsVertical } from 'react-icons/rx';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


export default function BasicPopover() {
    
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
     <a onClick={handleClick}>
      Ople organization 
      </a>
      
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>
        
        <FormGroup>
        <div>
      <Box
       component="form"
       sx={{
         '& .MuiTextField-root': {m:1,   width: '15ch'},
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
     <FormControlLabel control={<Checkbox  />} label="select all" />
   </div>
   </Box>
   </div>
      <FormControlLabel control={<Checkbox  />} label="ople123@gmail.com" />
      <FormControlLabel control={<Checkbox />} label="Brix@gmail.com" />
      <FormControlLabel control={<Checkbox  />} label="jason@gmail.com" />
     
    </FormGroup>
    <button id="mc">Confirm</button>
        </Typography>
       
      </Popover>
    </div>
  );
}