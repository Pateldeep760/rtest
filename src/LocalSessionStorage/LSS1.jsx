import React, { useState } from 'react'

const LSS1 = () => {

    const [mode,setMode]=useState(()=>{
        const store=sessionStorage.getItem('ab')
        return store==='dark'? 'dark':'light'
          
    })


    const show = () =>{
        if(mode==='light'){
            sessionStorage.setItem('ab','dark')
            setMode('dark')
        }else{
            sessionStorage.setItem('ab','light')
            setMode('light')
        }
    }
  return (
    <div>
<button onClick={show}>{mode==='light'?'set dark':'set light'}</button>
        <div className='mode'>{mode}</div>

    </div>
  )
}

export default LSS1

