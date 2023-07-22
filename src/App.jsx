import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import axios from 'axios'
import SharedLayout from './components/SharedLayout'
import Home from './pages/Home'
import Login from './pages/login'
function App() {
  const fetchCoinsCap = async ()=>{
    await axios.get("http://localhost:3004/coin").then((feedback)=>{
      setCoinCap(feedback.data.data)
      console.log(feedback.data.data);
    }).catch(err=>{
      console.log(err.message);
    })
  }
  useEffect(()=>{
    fetchCoinsCap()
  },[])
  return (
    <>
      <Routes>
        <Route path='/user_auth_page' element={<Login/>}/>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
