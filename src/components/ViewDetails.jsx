import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { AiOutlineUserAdd } from 'react-icons/ai';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {CgProfile } from 'react-icons/cg';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function createData( description, time, date) {
  return { description, time, date};
}

const rows = [
  createData('gwapo', "12:30", "05-25-2000" ),
  createData('gwapo', "12:30", "06-14-2001"),
 
];

export default function BasicModal({closeModal}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Views</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        
        <Box sx={style}>
          <div>
        <Button onClick={() => closeModal(false)}id="dp" >x</Button>
        </div>
        <h1>  <CgProfile /></h1>
          <h3>LogBook History</h3>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Time</TableCell>
            <TableCell align="center">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center">{row.time}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
              


            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          </Typography>
          <Button class ="dp" onClick={handleOpen}>Disable</Button>
        </Box>
      </Modal>
    </div>
  );
}