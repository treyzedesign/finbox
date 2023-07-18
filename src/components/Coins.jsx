import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { GoTriangleUp, GoTriangleDown } from "react-icons/go"
import { AiOutlineArrowUp, AiOutlineArrowDown} from "react-icons/ai"
import './comp.css'

const Coins = ({capdata}) => {
  const market = capdata.map((item, index)=>{
    return<><tr key={index} className="text-sm font-semibold text-gray-700 px-4 h-10">
      <td>{item.cmc_rank}</td>
      <td className='pt-2.5 flex justify-start pl-6'><img style={{display:"inline",height:"22px", width:"22px"}} src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${item.id}.png`}/><span className='inline pl-3'>{item.name} <span className='text-gray-400'>{item.symbol}</span></span></td>
      <td>&#36;{item.quote.USD.price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
      <td>{Math.sign(item.quote.USD.percent_change_1h.toFixed(2)) == 1 ? <span style={{color:"green"}} className='lg:block hidden'><AiOutlineArrowUp style={{color:"green", display: "inline", marginRight:'4px'}}/>{item.quote.USD.percent_change_1h.toFixed(2)}%</span> : <span className='lg:block hidden' style={{color:"red"}}><AiOutlineArrowDown style={{color:'red', display: "inline", marginRight:'4px'}}/>{item.quote.USD.percent_change_1h.toFixed(2)}%</span>}</td>   
      <td>{Math.sign(item.quote.USD.percent_change_24h.toFixed(2)) == 1 ? <span style={{color:"green"}} className='lg:block hidden'><AiOutlineArrowUp style={{color:"green", display: "inline", marginRight:'4px'}}/>{item.quote.USD.percent_change_24h.toFixed(2)}%</span> : <span style={{color:"red"}} className='lg:block hidden'><AiOutlineArrowDown style={{color:'red', display: "inline", marginRight:'4px'}}/>{item.quote.USD.percent_change_24h.toFixed(2)}%</span>}</td>   
      <td>{Math.sign(item.quote.USD.percent_change_7d.toFixed(2)) == 1 ? <span style={{color:"green"}} className='lg:block hidden'><AiOutlineArrowUp style={{color:"green", display: "inline", marginRight:'4px'}}/>{item.quote.USD.percent_change_7d.toFixed(2)}%</span> : <span className='lg:block hidden' style={{color:"red"}}><AiOutlineArrowDown style={{color:'red', display: "inline", marginRight:'4px'}}/>{item.quote.USD.percent_change_7d.toFixed(2)}%</span>}</td>    
      <td><span className='hidden lg:block'>&#36;{item.quote.USD.volume_24h.toFixed().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></td>    
      <td>&#36;{item.quote.USD.market_cap.toFixed().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td> 
      <td>
        <img className='hidden lg:block' src={`https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/${item.id}.svg`} style={{filter: "hue-rotate(85deg) saturate(80%) brightness(0.85)"}} alt="" srcset="" />
      </td>   
    </tr>
    </>
  })
  return (
    <>
    <div className='relative '>
        <div className='flex justify-center position-relative   p-16 bg-gradient-to-br from-neutral-100 via-lime-200 to-lime-100 shadow-lg' style={{minHeight:'120vh'}}> 
        </div>
        <div className='absolute p-16 top-0 w-full h-full '>
            <div className='backdrop-blur-md bg-white/50 overflow-x-scroll lg:overflow-hidden min-h-full rounded-lg px-6 shadow-2xl'>
            <table className='w-full text-center px-12'>
            <caption class="caption-top">
             <div className='text-gray-700 text-sm md:text-2xl font-bold py-4 pb-6'>Top crypto by marketCap</div>
            </caption>
            <thead className='mt-5'>
                <tr className='text-sm text-gray-700 font-light'>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th><span className='hidden lg:block'>1h %</span></th>
                <th><span className='hidden lg:block'>24h %</span></th>
                <th><span className='hidden lg:block'>7d %</span></th>
                <th><span className='hidden lg:block'>vol. 24h</span></th>
                <th>Market Cap</th>
                <th><span className='hidden lg:block'>Last 7 days</span></th>
                </tr>
            </thead>
            <hr className='w-full'/>
            <tbody className='px-8 py-5'>
                {market}
            </tbody>
            </table>
            <div className='text-center text-gray-600 py-4'>
              more <GoTriangleDown style={{display:"inline"}}/>
            </div>
            </div>
        </div>
    </div>
    <div style={{minHeight:"40vh"}} className=' bg-gradient-to-tl from-black via-stone-900 to-black w-full'>
        <div className='text-white pt-10'>
           <h3 className='text-5xl font-semibold text-center'>About Us</h3>
           <div className='grid lg:grid-cols-4 grid-rows py-16 gap-8'>
            <div className='text-center'>
              <p className='text-lime-300 text-5xl'>2023</p>
              <div >
                <small>Establishment</small>
              </div>
            </div>
            <div className='text-center'>
              <p className='text-lime-300 text-5xl'>2 millon+</p>
              <div >
                <small>Trusred users</small>
              </div>
            </div>
            <div className='text-center'>
              <p className='text-lime-300 text-5xl'>9 millon+</p>
              <div >
                <small>Payments in local currency</small>
              </div>
            </div>
            <div className='text-center'>
              <p className='text-lime-300 text-5xl'>6 millon+</p>
              <div >
                <small>Payments using crypto</small>
              </div>
            </div>
           </div>
        </div>
    </div>
    <div className='my-custom-2' style={{height:"60vh"}}>
      <div className='flex items-center h-full justify-center text-gray-300'>
        <div className='text-center w-7/12'>
          <h1 className='text-4xl font-semibold pb-4'>Keep up with the day-to-day happenings in the crypto market</h1>
          <p>subscribe to our news letter now! to get daily updates</p>
          <div className='my-2'>
            <input type='text' className=" flex-1 border rounded-md bg-grey-300 w-6/12 mx-4 mt-3  py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:border-lime-600 sm:text-sm sm:leading-6" placeholder='example@gmail.com'/>
            <input type="button" class="rounded-md bg-lime-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800" value={"send"}/>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Coins