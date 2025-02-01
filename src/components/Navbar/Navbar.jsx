import Link from 'next/link'
import React from 'react'
import logo from '../../assets/logo.svg';
import Image from 'next/image';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
export default function Navbar() {

 const navMenu = ()=>{
  return (
    <>
  <li>
    <Link href={''} className='navLink'>Home</Link>
  </li>
  <li>
    <Link href={''} className='navLink'> About </Link>
  </li>
  <li>
    <Link href={''} className='navLink'>Services</Link>
  </li>
  <li>
    <Link href={''} className='navLink'>Blog</Link>
  </li>
  <li>
    <Link href={''} className='navLink'>Contact</Link>
  </li>
  </>
  )
 }




  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {
          navMenu()
        }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">
     <Image src={logo} alt="Logo" width={100} height={50} />
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        navMenu()
      }
    </ul>
  </div>
  <div className="navbar-end gap-5">
    <div>
      <ul className='flex items-center gap-5'>
        <li>
          <Link href={''}><HiOutlineShoppingBag className='text-lg text-DarkGray'/></Link>
        </li>
        <li>
          <Link href={''}><IoSearchOutline className='text-lg text-DarkGray'/></Link>
        </li>
      </ul>
    </div>
  <Link href={''} className='text-Vermilion border-[1px] border-Vermilion py-3 px-5 rounded-md'>Appointment</Link>
  </div>
</div>
  )
}
