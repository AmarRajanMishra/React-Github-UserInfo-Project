import React from 'react'
import { useState } from 'react'

function Controlled() {
    const [state, setState] = useState('')
    const getData = (e) => {
        console.log(e)
        console.log(e.target)
        console.log(e.target.value)
        setState(e.target.value)

    }
  return (
    <>
    <h1>Get Input Value</h1>
    <input type={'text'} onChange={(e)=> getData(e)} />
    <h2>{state}</h2>
      
    </>
  )
}

export default Controlled
