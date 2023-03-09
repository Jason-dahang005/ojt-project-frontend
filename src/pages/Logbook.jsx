import  React , { useState }  from 'react';
import '../assets/styles/Logbook.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Button from '@mui/material/Button';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {FcSearch} from 'react-icons/fc';
import Header from './Header'
import BasicModal from '../components/BasicModal';
import ViewDetails from '../components/ViewDetails';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Datepicker from './Datepicker'
import Search from './Search'





function createData(name, description, time, date, status) {
  return { name, description, time, date, status};
}


const rows = [
  createData('Joven', "gwapo", "12:30", "05-25-2023", <ViewDetails/>),
  createData('jason', "gwapo", "12:30", "05-25-2023",  <ViewDetails/>),
  createData('brix', "gwapo", "12:30", "05-25-2023",  <ViewDetails/>),
  createData('gelo', "gwapo", "12:30", "05-25-2023",  <ViewDetails/>),
  createData('manman', "gwapo", "12:30", "05-25-2023", <ViewDetails/>),
];

export default function BasicTable() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <dib>
 
      <Header/>
      <br/>
      <br/>
      
      <h1>LogBook</h1>
    <div>
    <h4><a class="buttoniconsss"><Search/> </a>
  <a  class="buttoniconsss"> <Datepicker/> </a>
     <a  class="buttoniconsss"> <BasicModal/></a></h4>
     </div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Time</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center">{row.time}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center"><Button>{row.status}
                </Button>
              </TableCell>


            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </dib>
  );
}
