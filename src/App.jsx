import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Banner from './components/Banner'
import Coins from './components/Coins'
import axios from 'axios'
import Footer from './components/Footer'
function App() {
  const [coinCap, setCoinCap] = useState([])
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
      <Nav/>
      <Banner/>
      <Coins capdata={coinCap}/>
      <Footer/>
    </>
  )
}

export default App
