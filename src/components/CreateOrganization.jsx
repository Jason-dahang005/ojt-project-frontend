import React from 'react'
import axiosInstance from '../axios/interceptors'
import { useCookies } from 'react-cookie';
import instance from '../api/axios';
import { useState } from 'react';

const CreateOrganization = () => {

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
          'Content-Type' : 'application/json',
          'Authorization': `Bearer  ` + localStorage.getItem(['user'])
        }
      }
    )
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.error(error)
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="organization">Organization</label>
          <input type="text" id="organization" name="organization" className="" value={organization} onChange={(e) => setOrganization(e.target.value)} placeholder="Enter organization name" />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <input type="text" id="description" name="description" className="" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter description name" />
        </div>

        <div>
          <button type="submit">Create Organization</button>
        </div>
      </form>
    </div>
  )
}

export default CreateOrganization
