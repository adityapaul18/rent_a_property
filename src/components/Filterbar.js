import { Button, MenuItem, TextField } from '@mui/material'
import React from 'react'
import './Filterbar.css'

function Filterbar({settype,setbeds, setlocation,setprice,filter}) {
  return (
    <div className='FilterbarContainer'>
        <TextField onChange={(e) => setlocation(e.target.value)} className='filterInputs' select label="Location" >
            <MenuItem value="Delhi">Delhi</MenuItem>
            <MenuItem value="Mumbai">Mumbai</MenuItem>
            <MenuItem value="Chennai">Chennai</MenuItem>
            <MenuItem value="Kolkata">Kolkata</MenuItem>
        </TextField>
        <TextField onChange={(e) => setprice(e.target.value)} className='filterInputs' select label="Price">
            <MenuItem value="5000">{"< "}5000 INR</MenuItem>
            <MenuItem value="20000">{"< "}20000 INR </MenuItem>
            <MenuItem value="40000">{"< "}40000 INR</MenuItem>
        </TextField>
        <TextField onChange={(e) => settype(e.target.value)} className='filterInputs' select label="Property Type">
            <MenuItem value="Flat">Flat</MenuItem>
            <MenuItem value="Duplex">Duplex</MenuItem>
            <MenuItem value="Bunglow">Bunglow</MenuItem>
        </TextField>
        <TextField onChange={(e) => setbeds(e.target.value)} className='filterInputs' select label="Bedrooms">
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4</MenuItem>
        </TextField>
        <Button onClick={filter} className='filterbuttton'>filter</Button>
      </div>
  )
}

export default Filterbar