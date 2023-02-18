import React from 'react'

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ChannelDetails,Feed,VideoDetail,Navbar,SearchFeed} from './Components'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Feed/>}/>
        <Route path='/video/:id' element={<VideoDetail/>}/>
        <Route path='/channel/:id' element={<ChannelDetails/>}/>
        <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App