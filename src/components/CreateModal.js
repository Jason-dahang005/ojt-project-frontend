import React from 'react'
import { useState } from 'react'
import instance from '../api/axios';
import { useCookies } from 'react-cookie';

import { 
  Button,
  TextField,
  Modal,
  Box,
  Typography,
  Stack,
} from '@mui/material'

import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

const CreateModal = () => {
  const [open, setOpen] = useState(false)
  const [organization, setOrganization] = useState('')
  const [description, setDescription] = useState('')
  const [cookies, setCookie] = useCookies(['user']);

  const handleSubmit = (e) => {
    e.preventDefault()

    instance.post('create-organization',
      JSON.stringify({ organization, description }),
      {
        headers:
        {
          'Content-Type': 'application/json',
          'Authorization': `Bearer  ` + localStorage.getItem(['user'])
        }
      }
    )
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className='container'>
      <Box
        display="flex"
        padding={3}
        justifyContent="end"
      >
        <Button onClick={() => setOpen(true)} variant="contained" size="small"><AddIcon/> Create Organization</Button>
      </Box>
      <Modal aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" open={open} sx={{ 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
       }}>
        <Stack>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
          width="100%">

          <Box sx={{ 
            backgroundColor: 'white',
            width: '400px',
            padding: '30px 20px',
            borderRadius: '5px',
            display: 'flex',
            flexDirection: 'column'
           }}>

            <Box position="relative">
              <CloseIcon onClick={() => setOpen(false)}
                sx={{ 
                  position: 'absolute', top: 0, right: 0, cursor: 'pointer'
                 }}
              />
              <Typography
              component="h1" 
              variant="h5"
              align='center'
              >
                Create Organization
              </Typography>
            </Box>

            <Box>
              <form onSubmit={handleSubmit}>
                <TextField
                  sx={{ 
                    marginTop: '20px',
                    marginBottom: '10px'
                  }}
                  variant="outlined"
                  label="Name"
                  type='text'
                  required
                  fullWidth
                  autoComplete='off'
                  name="organization"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  size="small"
                />

                <TextField
                  sx={{ 
                    marginTop: '20px',
                    marginBottom: '10px'
                  }}
                  variant="outlined"
                  label="description"
                  type='text'
                  required
                  fullWidth
                  autoComplete='off'
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  size="small"
                />
                <Box
                  sx={{ 
                    display: 'flex',
                    justifyContent: 'end'
                  }}
                  >
                  <Button
                    sx={{ 
                      marginTop: '10px'
                    }}
                    size="small"
                    type='submit'
                    variant='contained'
                  >Create</Button>
                </Box>
              </form>
            </Box>
          </Box>
        </Box>
        </Stack>
      </Modal>
    </div>
  )
}

export default CreateModal
