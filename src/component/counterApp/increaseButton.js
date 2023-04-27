import React, { useState } from 'react'
import './bothButton.css'

export default function Increasebutton() {
    const[countNum , setCount] = useState(0)

    function AddNum(){
        // setCount(countNum + 1)
        const newcount = countNum + 1
        setCount(newcount)
    }
  return (
    <div className='App'>
      <h1>Increase the number</h1>
      <h2>{countNum}</h2>
      <button className='btn' onClick={AddNum}>Increase the number</button>

      
    </div>
  )
}