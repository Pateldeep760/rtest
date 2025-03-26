import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.scss'

const Header = () => {
    const ab = useNavigate()
  return (
    <div className='header-m'>
        <button onClick={()=>ab('/Content')}>Main Content</button>
        <button onClick={()=>ab('/')}>header</button>
        <button onClick={()=>ab('/Footer')}>Footer</button>

    </div>
  )
}

export default Header