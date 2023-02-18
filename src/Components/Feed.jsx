import React from 'react'
import {useState,useEffect} from 'react';
import {Box,Stack,Typography} from  '@mui/material';
import {Sidebar,Videos} from './'
import {fetchFromAPI} from '../Utils/FetchFromApi';

const Feed = () => {
  const[selectedCategory,setSelectedCategory] = useState('New')
  const[videos,setVideos]=useState([])

  useEffect(()=>{
    setVideos(null)

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>{setVideos(data.items)})
  },[selectedCategory])

  return (
   <Stack
   sx={{flexDirection:{sx:"column", md:'row'},backgroundColor:'#000'}}>

    <Box sx={{
      height:{sx:'auto', md:'92vh'},
      borderRight:'1px solid #3d3d3d',
      px:{sx:0,md:2},
      background:'#000'
    }}>
    <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      

    </Box>
    <Box p={2} sx={{overflowY:'auto',height:"90vh", flex:2}}>
      <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:'white'}}>
       {selectedCategory} <span style={{color:'#F31503'}}>Videos</span>
      </Typography>

      <Videos videos={videos}/>
    </Box>

   

   </Stack>
  )
}

export default Feed