import React from 'react'
import './Ue2.scss'
import { useState, useEffect } from 'react'
import { PiStudentBold } from 'react-icons/pi';

import { ImLocation2 } from 'react-icons/im';
import { FaHandshake } from 'react-icons/fa';
import { TbHeartRateMonitor } from 'react-icons/tb';

const Ue2 = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    

    useEffect(() => {
        setTimeout(() => {
            if (count1 < 299) {
                setCount1((count1) => count1 + 1);
            }
        }, 10);
    });
    useEffect(() => {
        setTimeout(() => {
            if (count2 < 93) {
                setCount2((count2) => count2 + 1);
            }
        }, 500);
    });
    useEffect(() => {
        setTimeout(() => {
            if (count3 < 49) {
                setCount3((count3) => count3 + 1);
            }
        }, 400);
    });
    useEffect(() => {
        setTimeout(() => {
            if (count4 < 49) {
                setCount4((count4) => count4 + 1);
            }
        }, 400);
    });

    return (
        <div className='Ue2Main'>
            <div className='count1'>
                <div><PiStudentBold size={40}/></div>
                <p>{count1}+</p>
                <h3>Student Internship</h3>
            </div>
            <div className='count2'>
                <div><ImLocation2 size={40}/></div>
                <p>{count2}%</p>
                <h3>Placement Ratio</h3>
            </div>
            <div className='count3'>
                <div><FaHandshake size={40}/></div>
                <p>{count3}+</p>
                <h3>Companies Tie-up</h3>
            </div>
            <div className='count4'>
                <div><TbHeartRateMonitor size={40}/></div>
                <p>{count4}+</p>
                <h3>projects Completed</h3>
            </div>
            
        </div>
    )

}

export default Ue2