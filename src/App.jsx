import React from 'react'
import Home from './Components/Home'
import Shop from './Components/Shop'
import Navbar from './Components/Navbar'
import Topselling from './Components/Topselling'
import Browse from './Components/Browse'

import {BrowserRouter,Routes,Route} from 'react-router-dom'

const App = () => {
  return (
   <>
<BrowserRouter>
<Navbar/>
<Routes>
   <Route path="/" element={<Home/>}/> 
  <Route path="/shop" element={<Shop/>}/>
  <Route path="/topselling" element={<Topselling/>}/>
  <Route path="/browse" element={<Browse/>}/>



</Routes>
  
</BrowserRouter>
   </>
  )
}

export default App