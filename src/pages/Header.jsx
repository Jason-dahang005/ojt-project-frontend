import * as React from 'react';
import {ModalClose, ModalDialog,Typography,Modal,Stack,Button } from '@mui/joy';
import {  useNavigate } from 'react-router-dom';



const Header = ( ) => {
  const [open, setOpen] = React.useState('');
  const navigate=useNavigate();

  const onMessage = () => {
    navigate('/logbook')
  }
  const onMessages = () => {
    navigate('/op')
  }
  return (
    <React.Fragment>
      <Stack direction="row" spacing={1}>
      <Button
          variant="outlined"
          color="neutral"
          onClick={onMessage}
        
        >
        People
        </Button>
        <Button
           variant="outlined"
           color="neutral"
           onClick={onMessages}
        >
         Organization
        </Button>
      </Stack>
    </React.Fragment>
    
  );
}
export default Header;