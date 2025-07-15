import React from 'react'
import { NavLink } from 'react-router-dom'
import RR from '../../assets/images/RR.png'
import './Navbar.css'


const Navbar = () => {
  return (
   <header className='header flex absolute z-1 w-full justify-between   h-1 bg-transparent top-3  ' >
    <NavLink  to="/">
        <img src={RR} alt="" className='w-15 h-10 bg-transparent relative rounded-2xl  object-contain ml-'/>
    </NavLink>
    <nav className='flex nav-menu text-lg gap-7 font-semibold mt-1.5 px-5  '>
        <NavLink to="/"  className={({isActive})=>isActive?" text-blue-800  ":"text-black" }>Home</NavLink>
        <NavLink to="/about" className={({isActive})=>isActive?"text-blue-800  ":"text-black" }>About</NavLink>
        <NavLink to="/projects"  className={({isActive})=>isActive?"text-blue-800  ":"text-black" }>Projects</NavLink>
        <NavLink to="/contact"  className={({isActive})=>isActive?"text-blue-800  ":"text-black" }>Contact</NavLink>
    </nav>
   </header>
  )
}


export default Navbar
