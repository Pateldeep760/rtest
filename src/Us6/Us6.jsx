import React, { useState } from 'react'
import './Us6.scss'

const Us6 = () => {
    const [open, setOpen] = useState(false)
    const handle = () => setOpen(!open)
    return (
        <div className='modal'>
            <button onClick={handle}>modal</button>

            {open &&
                <div className='modal-main'>

                    modal content
                </div>

            }
        </div>
    )
}

export default Us6