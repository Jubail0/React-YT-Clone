import React from 'react'
import {Stack} from "@mui/material";
import {categories} from '../Utils/data.js'

const Sidebar = ({selectedCategory,setSelectedCategory}) => {
  
  return (
    <Stack
    direction="row"
    sx={{
      overflowY:"auto",
      height:{sx:'auto',md:'95%'},
      flexDirection:{md:'column', sx:'row'}
      }}>

    {
      categories.map(({name,icon})=>(
        <button className='category-btn' style={{
          background:selectedCategory === name && '#fc1503' ,
          color: "white"
        }}
        onClick={()=>setSelectedCategory(name)}
        key={name}
        >
        <span style={{
          color:selectedCategory === name? 'white' : "red",
          marginRight:'15px'
        }}>
          {icon}
        </span>
        <span style={{
          opacity:selectedCategory ===name ? '1': '0.8',
        }}>{name}</span>


        </button>
      ))
    }

    </Stack>
  )
}

export default Sidebar