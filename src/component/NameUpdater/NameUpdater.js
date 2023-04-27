import React, { useState } from 'react'
import { Fragment } from 'react'

import './NameUpdater.css'
export default function NameUpdater() {

    const [CurrentName , UpdateName] = useState('***')
    const [name,setname] = useState('')
    const Namechange = (event) => {
        setname(event.target.value)
        
    }
    const fromSubmit = (event) => {
        event.preventDefault()
        UpdateName(name)

    }
    

    return (
        <Fragment class="form">
         <form onSubmit={fromSubmit}>
          <input
          className='inputTag'
          placeholder='Enter Name'
          onChange={Namechange}
    />
        
          <button type='submit' className='btn'>Change Name</button>
          </form> 
          <h1>Hi, My Name is : {CurrentName}</h1>
        </Fragment>
      )
    }