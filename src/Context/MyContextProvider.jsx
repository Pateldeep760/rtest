import React, { useState } from 'react'
import MyContext from './MyContext'

const MyContextProvider = ({children}) => {

    const ab = 3

    const[dark,setDark]=useState(false)

  return (
   <MyContext.Provider value={{ab,dark,setDark}}>
{children}
    </MyContext.Provider>
  )
}

export default MyContextProvider