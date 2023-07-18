import React from 'react'
import verve from '../assets/verve-svgrepo-com.svg'
import blockcypher from '../assets/blockcypher.svg'
import coinmarket from '../assets/coinmarket.svg'
import mitsubishi from '../assets/mitsubishi.svg'
import './comp.css'
import Typed from 'react-typed'
const Banner = () => {
  return (
    <div className='text-white'>
        <div className="my-custom h-5/6 lg:h-screen pb-10">
            <div class="container w-full flex pt-10 lg:justify-start justify-center mx-auto">
                <div className='w-9/12 lg:w-5/12 px-3 pt-16'>
                  <div className='text-center lg:text-left '>
                    <h1 className='text-2xl lg:leading-relaxed font-semibold lg:text-5xl sm:2xl subpixel-antialiased'>The world's number one online trading platform.</h1>
                    <p className='text-md md:2xl font-semibold pt-2'>Fast, Flexible financing in <Typed className='text-lime-500 font-bold' strings={['BTC.', "ETH.", "USDT.", "BNB.", "XRP."]} loop typeSpeed={100} backSpeed={70} backDelay={1000} /></p>
                    <button type="button" className='mt-8 py-2 px-2.5 text-lg font-medium text-white rounded-lg bg-lime-700 border border-lime-500 hover:bg-lime-600'>Get started</button>
                  </div>
                </div>
            </div>
        </div>
        <div className='bg-gradient-to-tl from-black via-stone-900 to-black w-full text-center pt-12' style={{minHeight: "50vh"}}>
          <div className=' text-center'>
            <h1 className='lg:text-3xl text-xl px-4 leading-relaxed font-medium subpixel-antialiased'>Instant Payments and withdrawals, 24/7</h1>
            <h4 className='text-md px-4 leading-relaxed font-light  subpixel-antialiased '>Our withdrawals are carried out in seconds with no manual processing, including on weekends.</h4>
          </div>
          <div className='text-xl pt-8 leading-relaxed font-normal '>Our Partners</div>
          <div className='flex flex-wrap justify-center justify-around py-4 '>
              <img src="http://images.ctfassets.net/1rkoumd4khui/7ls0FTDb6PByyPKV1M7ykx/1a1b9eb0a9f602033f0d3e05485aabce/Card.svg" alt="visa" className='w-2/12'/>
              <img src="http://images.ctfassets.net/1rkoumd4khui/7HKmcWbBcDIphCfviwMJXx/6b217cc5cb4a2dfcd6a1c9d0924bb580/Card__1_.svg" alt=""   className='2/12'  />
              <img src={coinmarket}  className='w-1/12 h-1/6'/>
              <img src={mitsubishi}  className='w-1/12 h-1/6'/>
            </div>
        </div>
    </div>
  )
}

export default Banner