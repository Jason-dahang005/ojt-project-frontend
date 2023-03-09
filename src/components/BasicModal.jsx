import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { AiOutlineUserAdd } from 'react-icons/ai';
import TextField from '@mui/material/TextField';
import { FcGoogle } from 'react-icons/fc';
import Google from '../pages/Google'
import Dots from '../pages/Dots'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>invite<AiOutlineUserAdd/></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Organization Name
           <br/>
          </Typography>
          <Typography id="okk" variant="h6" component="h4"> 
          <div>
          Recipients<Button id="p" onClick={handleOpen}><Dots/></Button><Button id="p" onClick={handleOpen}><Google/></Button> 
          </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
     
    >  <div>
      <TextField
    id="outlined-multiline-static"
    label="Description"
    multiline
    rows={10}
    />
  </div>
  </Box>
  
  <button id="mc">Confirm</button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}