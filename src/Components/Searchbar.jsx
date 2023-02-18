import { useNavigate } from 'react-router-dom';
import {Paper,IconButton} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const Searchbar = () => {
  const[searchTerm,setSearhTerm]=useState('')
  const navigate = useNavigate()
  
  
  const handleSubmit =(e)=>{
   
    if(searchTerm){
      e.preventDefault();
      navigate(`/search/${searchTerm}`)
    }
    setSearhTerm('')
   
  }

  return (
    <Paper 
    component="form"
    onSubmit= {handleSubmit}
    sx={{borderRadius:'20px', border:"1px solid #e3e3e3",boxShadow:'none',marginRight:{sm:"5px"}}}
    paddingleft={2}
    >

      <input 
      type="text"
      placeholder='Search...'
      className='search-bar'
      value={searchTerm}
      onChange={(e)=>{setSearhTerm(e.target.value)}} />

      <IconButton
      type='submit'
      sx={{padding:'10px',color:'red'}}
      >
      <SearchIcon/>
      </IconButton>

    </Paper>
  )
}

export default Searchbar