
import {useState,useEffect} from 'react';
import {Box,Typography} from  '@mui/material';
import {Videos} from './'
import {fetchFromAPI} from '../Utils/FetchFromApi';
import {useParams} from 'react-router-dom'

const SearchFeed = () => {
  const[videos,setVideos]=useState([])
  const{searchTerm} = useParams()

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data)=>{setVideos(data.items)})
  },[searchTerm])

  return (
  
    <Box p={2} minHeight="95vh" sx={{backgroundColor:'#000'}}>
      <Typography variant='h4' fontWeight={900} mb={3} ml={{sm:"100px"}} sx={{color:'white'}}>
       Search result for : <span style={{color:'#F31503'}}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex">
      <Box sx={{mr:{sm:'100px'}}}>
      <Videos videos={videos}/>
      </Box>
      </Box>
      
    </Box>


  )
}

export default SearchFeed