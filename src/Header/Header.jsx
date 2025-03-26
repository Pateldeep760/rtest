import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.scss'
import { BsCartPlus } from 'react-icons/bs'
import { LuTableOfContents } from 'react-icons/lu'

const Header = () => {
    const ab = useNavigate()
  return (
    <div className='header-m'>
        <button onClick={()=>ab('/Content')}>Content1 <LuTableOfContents /> </button>
        <button onClick={()=>ab('/Content2')}>Content2 <LuTableOfContents /></button>
        <button onClick={()=>ab('/Content3')}>Content3 <LuTableOfContents /></button>
    </div>
  )
}

export default Header