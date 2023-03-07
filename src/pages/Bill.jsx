import * as React from 'react';
import {ModalClose, ModalDialog,Typography,Modal,Stack,Button } from '@mui/joy';
import {  useNavigate } from 'react-router-dom';



const Bill = ( ) => {
  const [open, setOpen] = React.useState('');
  const navigate=useNavigate();

  const onMessage = () => {
    navigate('/sms')
  }
  return (
    <React.Fragment>
      <Stack direction="row" spacing={1}>
      <Button
          variant="outlined"
          color="neutral"
          onClick={onMessage}
        
        >
         Message
        </Button>
        <Button
          variant="outlined"
          color="neutral"
          onClick={() => setOpen('fullscreen')}
        >
          Invitation
        </Button>
      </Stack>
      <Modal open={!!open} onClose={() => setOpen('')}>
        <ModalDialog
          aria-labelledby="layout-modal-title"
          aria-describedby="layout-modal-description"
          layout={open || undefined}
        >
          <ModalClose />
          <Typography id="layout-modal-title" component="h1">
           MESSAGE
          </Typography>
          <Typography id="layout-modal-description" textColor="text.tertiary">
            This is a <code>{open}</code> modal dialog. Press <code>esc</code> to
            close it.
          </Typography>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
export default Bill;