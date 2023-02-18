import React from 'react'
import {Stack} from "@mui/material"
import {Link} from 'react-router-dom'
import { logo } from '../Utils/data';
import Searchbar from './Searchbar';


const Navbar = () => {
  return (
    <Stack 
    direction="row" 
    alignItems="center"
    p={2}
    sx={{position:'sticky', backgroundColor:'#000', justifyContent:'space-between' }}
    >
    
    <Link to="/"style={{ display: "flex", alignItems: "center" }}>
    <img src={logo} height={45} alt="logo"/>
    </Link>

    <Searchbar/>

    </Stack>
  )
}

export default Navbar