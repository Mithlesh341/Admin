import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Sidebar from './Components/Sidebar/Sidebar'
import { Route,Routes } from 'react-router-dom'
import List from './pages/List/List.jsx'
import Home from './Components/Home.jsx'
import Approved from './pages/Approved/Approved.jsx'



const App = () => {

 // const url = "http://localhost:5500"

  return (
    <>
     <Home/>
     <Routes>
      {/*<Route path='/' element={<Home/>}> */}
          {/* <Route path='/' element={<Home/>}>  </Route>
          <Route path='/list' element={<List/>}></Route>
          <Route path='/approved' element={<Approved/>} ></Route> */}
          {/* </Route> */}
           <Route path='/' element={<List/>}/>
          <Route path='/list' element={<List/>}/>
          <Route path='/approved' element={<Approved/>}/>  
     </Routes> 
     
    </>
  )
}

export default App
{/**/}

{/* <ToastContainer/>
<Navbar/>
<hr/>
<div className="app-content">
   <Sidebar/>
   <Routes>
      <Route path='/list' element={<List url={url}/>}/>
  </Routes> */}