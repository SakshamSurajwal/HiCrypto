import React from 'react'
import {BsCoin} from 'react-icons/bs'
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Link to='/'>
        <div className='navbar'>
            <BsCoin className='icon'/>
            <h1 className='main'>Hi Crypto</h1>
        </div>
    </Link>
  )
}

export default Navbar
