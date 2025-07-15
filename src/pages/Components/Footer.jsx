import React from 'react'
import {socialLinks} from '../../constants/index.js'
import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <footer className='max-w-5xl mx-auto sm:px-16 pb-6 px-8 flex flex-col gap-7 ' >
         <hr className='border-slate-300' />
         <div className="flex flex-wrap flex-col gap-7 items-center justify-between">
            <p className='font-bold text-gray-700'>
                &copy; 2025 <strong className='text-xl'>Rahul</strong>, All Rights Reserved
            </p>
         </div>
         <div className="flex gap-3 justify-center items-center">
            {socialLinks.map((link,index)=>{
                return(
                    <Link key={index} to={link.link} target='_blank'>
                    <img src={link.iconUrl} alt={link.name} className="w-6 h-6 object-contain" /></Link>
                )
            })}
         </div>
    </footer>
  )
}

export default Footer
