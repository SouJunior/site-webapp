import React from "react";
import Link from 'next/link'
import {dataNavbar} from '../../utils/dataNavbar'

export const Navbar = () => {
  return (
    <ul>
    {dataNavbar.map((link,index)=>(
      <li key={index}>
        <Link href={link.path}>
          {link.title}
        </Link>
      </li>
    ))}  
    </ul>
  )
}
