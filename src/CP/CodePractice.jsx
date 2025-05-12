
import React, { useState, useContext } from 'react'
import ValuePackage from '../Context/ValuePackage'

const CodePractice = () => {

  const {ab, cd} = useContext(ValuePackage)
  const {dm, setDm} = useContext(ValuePackage)
  const {Modal, setModel} = useContext(ValuePackage)
  
  return (
    <div >
      <h1>CodePractice</h1>
      <button onClick={() => setModel(false)}> click</button>
      <p>{Modal ? "true":"false"}</p>
      <p>AB = {ab}</p>
      <p>CD = {cd}</p>
    </div>

  )
}

export default CodePractice