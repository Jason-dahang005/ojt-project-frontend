import React from 'react'
import instance from '../api/axios'
import { useEffect, useState } from 'react'
import { Box, Grid, Typography } from '@mui/material' 
import { useNavigate } from 'react-router-dom'

const ListOrganization = () => {

  const navigate = useNavigate()

  const [org, setOrg] = useState([])

  const fetch = () => {
    instance.get('list-organization', {
      'headers' : {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('user')}`
      }
    }).then((response) => {
      setOrg(response.data.organization)
    })
  }

  useEffect(() => {
    fetch()
  }, [org])




  
  return (
    <Grid container spacing={2} sx={{ padding: '0px 20px' }}>
      {
        org.map((item) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <Box onClick={() => navigate('organization') }
                sx={{
                  height: 200,
                  backgroundColor: '#fff',
                  borderRadius: '5px',
                  padding: '20px',
                  boxShadow: 4,
                  '&:hover': {
                    cursor: 'pointer',
                    backgroundColor: '#e6e6e6',
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
                >
                <Typography variant='h4' component='h1'>
                  {
                    item.name
                  }
                </Typography>
                <Typography variant='h6' conponent='h4'>
                  {
                    item.description
                  }
                </Typography>
              </Box>
            </Grid>
          )
        })
      }
    </Grid>
  )
}

export default ListOrganization
