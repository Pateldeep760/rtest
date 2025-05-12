// import React, { useState } from 'react'

// const Ue1 = () => {

//     const [mode,setMode]=useState(()=>{
//         const store=sessionStorage.getItem('ab')
//         return store==='dark'? 'dark':'light'
          
//     })


//     const show = () =>{
//         if(mode==='light'){
//             sessionStorage.setItem('ab','dark')
//             setMode('dark')
//         }else{
//             sessionStorage.setItem('ab','light')
//             setMode('light')
//         }
//     }
//   return (
//     <div>
// <button onClick={show}>{mode==='light'?'set dark':'set light'}</button>
//         <div className='mode'>{mode}</div>

//     </div>
//   )
// }

// export default Ue1



import React from 'react'
import './Ue1.scss'
import { useState, useEffect } from 'react'

const Ue1 = () => {

    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    });

    return (
        <div className='Ue1Main'>
            <h1>Use Effect Eaxmple 1</h1>
            <h2>I have rendered {count} times!</h2>

        </div>
    )

}

export default Ue1