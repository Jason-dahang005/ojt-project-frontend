import {React, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import instance from '../api/axios'
import { 
  Box,
  Button,
  Stack,
  TextField,
  Typography 
} from '@mui/material'

const Register = () => {

  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [cookies, setCookies] = useCookies(['user'])


  const handleSubmit = (e) => {
    e.preventDefault()

    instance.post('register',
      JSON.stringify({
        name,
        email,
        password
      }),
      {
        headers:
        {
          'Content-Type' : 'application/json'
        }
      }
    )
    .then((response) => {
      //const credential = response?.data
      //setCookies('user', credential)
      //localStorage(response.data.token)
      console.log(response.data)
      navigate('/')
    })
    .catch((error) => [
      console.log(error)
    ])
  }
  
  return (
    <Stack>
      <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100%"
      >
        <Box
          sx={{ 
            border: '1px solid lightgray',
            width: '400px',
            padding: '50px 30px'
           }}
          padding={2}>
          <Typography component="h1" 
            variant="h4"
            align='center'
            >Sign up</Typography>
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
              id='name'
              name='name'
              autoComplete='off'
              size='small'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <TextField
              sx={{ 
                margin: '10px 0px'
               }}
              variant="outlined"
              label="Email"
              type='text'
              required
              fullWidth
              id='email'
              name='email'
              autoComplete='off'
              size='small'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
            <TextField
              sx={{ 
                margin: '10px 0px'
              }}
              variant="outlined"
              label="Password"
              type='password'
              required
              fullWidth
              id='password'
              name='password'
              autoComplete='off'
              size='small'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              sx={{ 
                margin: '10px 0px'
              }}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >Sign up</Button>
          </form>
          <Typography margin='normal' variant='body1'>Already have an account? <Link to="/">sign in here!</Link></Typography>
        </Box>
      </Box>
    </Stack>
  )
}

export default Register
