import React from 'react'
import Valuepackage from './ValuePackage'
import { useState } from 'react'    

const ValuePackageProvider = ({children}) => {
    const ab = 123
    const cd = 789
    const [dm, setDm] = useState(false)
    const [Modal, setModel]=useState(false)

  return (
    <Valuepackage.Provider value={{ab,cd,dm,setDm, Modal,setModel}}>
        {children}
    </Valuepackage.Provider>
  )
}

export default ValuePackageProvider