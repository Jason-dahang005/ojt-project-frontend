import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { AiOutlineUserAdd } from 'react-icons/ai';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { RxDotsVertical } from 'react-icons/rx';
import Orgdot from '../pages/Orgdot'
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
      <Button id="p" onClick={handleClick}>
      <RxDotsVertical/>
      </Button>
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
        
       <button><Orgdot/></button>
        </Typography>
      </Popover>
    </div>
  );
}