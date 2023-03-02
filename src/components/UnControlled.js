import React, { useRef } from 'react'

function UnControlled() {
    const inputRef = useRef(null)
    const getData = () => {
        console.log(`Input Value : ${inputRef.current.value}`)
    }
  return (
    <>
    <h1>Un Controlled</h1>
    <input type={'text'} ref={inputRef} />
    <button onClick={getData}>Get Data</button>
      
    </>
  )
}

export default UnControlled;
