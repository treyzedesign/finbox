import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaRegCopyright, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div style={{minHeight:"60vh"}} className='pt-16 text-white bg-gradient-to-tl from-black via-stone-900 to-black w-full'>
        <div className='px-6'>
        <hr/>
            <div className='grid sm:grid-cols-4 grid-rows px-16 pb-8 pt-10 gap-10'>
                <div>
                    <h3 className='text-xl font-semibold'>About Us</h3>
                    <ul type="none" className='text-gray-400'>
                        <li className='py-2 text-sm font-light'>Blog</li>
                        <li className='py-2 text-sm font-light'>Safety</li>
                        <li className='py-2 text-sm font-light'>meet the team</li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-xl font-semibold'>Individuals</h3>
                    <ul type="none" className='text-gray-400'>
                        <li className='py-2 text-sm font-light'>VybeBlog</li>
                        <li className='py-2 text-sm font-light'>dbnet</li>
                        <li className='py-2 text-sm font-light'>Saccom</li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-xl font-semibold'>Support</h3>
                    <ul type="none" className='text-gray-400'>
                        <li className='py-2 text-sm font-light'>contact us</li>
                        <li className='py-2 text-sm font-light'>legal information</li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-xl font-semibold'>Community</h3>
                    <ul type="none" className='text-gray-400'>
                        <li className='py-2 text-sm font-light'>
                            <Link><FaTwitter className='inline mr-3'/><span>Twitter</span></Link>
                        </li>
                        <li className='py-2 text-sm font-light'>
                            <Link><FaInstagram className='inline mr-3'/><span>Instagram</span></Link>
                        </li>
                        <li className='py-2 text-sm font-light'>
                            <Link><FaLinkedin className='inline mr-3'/><span>LinkedIn</span></Link>
                        </li>
                        <li className='py-2 text-sm font-light'>
                            <Link><FaGithub className='inline mr-3'/><span>Github</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
        <hr />
        <div className='pt-4 text-center'>
            <span className='font-semibold text-lime-500'>finBox.</span>
            <span><FaRegCopyright className='inline mx-3 text-gray-500 text-xs'/> </span>
            <span className='text-xs text-gray-500'>2023  Treyzedesigns</span>
        </div>
        </div>
    </div>
  )
}

export default Footer