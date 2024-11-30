import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { BrowserRouter } from 'react-router-dom'
import Sidebar2 from './components/Sidebar2'

function App() {
  return (
   <BrowserRouter>
    {/* <Sidebar/> */}
    <Sidebar2>
    <Header heading="Dashboard"/>
      Home page
      
    </Sidebar2>
   </BrowserRouter>
  )
}

export default App
