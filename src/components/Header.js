import React from 'react'
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import { Button } from '@mui/material';
import './Header.css'

function Header() {
  return (
    <div className='headerContainer'>
        <div className='headerLeft'>
            <div className='logoBox'>
                <HomeWorkIcon/>
                <span>HOmes.In</span>
            </div>
            <div>
                <Button className='headerButton'>rent</Button>
                <Button className='headerButton'>buy</Button>
                <Button className='headerButton'>sell</Button>
            </div>

        </div>
        <div className='headerRight'>
            <Button className='headerButton' variant='oulined'>log in</Button>
            <Button className='headerButton2' variant='contained'>sign up</Button>
        </div>
    </div>
  )
}

export default Header