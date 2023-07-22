import React,  {useState} from 'react'
import { Link } from 'react-router-dom'
import { BiLogIn, BiMenu} from 'react-icons/bi'
import { LiaTimesSolid} from 'react-icons/lia'
import { useNavigate } from 'react-router-dom'
const Nav = () => {
  const [nav, setNav] = useState(false)
  const navgigate = useNavigate()
  const handleNav = ()=>{
    setNav(!nav)
  }
  return (
    <div className='sticky top-0 z-10'>
      <nav className='bg-slate-900 text-white flex '>
        <div className='flex-auto items-center w-20'>
          <h1 className='px-6 text-lime-500 py-3  font-bold text-4xl'>finBox.</h1>
        </div>
        <div className='flex-auto lg:w-40 w-80'>
          <div className='flex hidden lg:flex justify-around py-6'>
            <Link>Prices</Link>
            <Link>About</Link>
            <Link>Companies</Link>
            <Link>Help</Link>
          </div>     
        </div>
        <div className='flex-auto lg:w-40 w-20 text-right py-6 '>
          <div className='px-4 flex lg:block justify-end'>
            <span onClick={()=> navgigate('/user_auth_page')} class="hidden lg:inline py-1.5 px-5 mr-2 inline  text-sm font-medium text-lime-500  focus:outline-none rounded-lg border border-lime-700 hover:text-white cursor-pointer hover:bg-lime-500 ">Login</span>
            {nav ?  <BiMenu onClick={()=> handleNav()} style={{fontSize:"26px"}} className=' inline  lg:hidden cursor-pointer items-center '/> :  <BiMenu onClick={()=> handleNav()} style={{fontSize:"26px"}} className=' inline  lg:hidden cursor-pointer items-center'/>}
          </div>
        </div>
        <ul className={nav ? 'fixed right-0 z-50 top-0 w-full h-full border-r border-r-gray-900  bg-slate-900 ease-in-out duration-500' : 'ease-in-out duration-500 fixed right-[-100%]'}>
          <div className='text-right pt-3 pb-3'>
            <LiaTimesSolid onClick={()=> handleNav()} className=' inline pt-3  lg:hidden cursor-pointer items-center text-4xl'/>
          </div>
          <li className='p-4 border-b border-gray-600 hover:bg-lime-500 cursor-pointer'>Prices</li>
          <li className='p-4 border-b border-gray-600 hover:bg-lime-500 cursor-pointer'>About</li>
          <li className='p-4 border-b border-gray-600 hover:bg-lime-500 cursor-pointer'>Companies</li>
          <li className='p-4 border-b border-gray-600 hover:bg-lime-500 cursor-pointer'>help</li>
          <li className='p-4 hover:bg-lime-500 cursor-pointer' onClick={()=> navgigate('/user_auth_page')}>Login</li>
      </ul>
      </nav>
   </div>
  )
}

export default Nav