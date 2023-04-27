import React, { useState } from 'react'
import './bothButton.css'

export default function DecreaseButton() {
    const[DecNum, DecCount] = useState(5)

    function DecNumber() {
        const DecCountt = DecNum - 1
        DecCount(DecCountt)
        if ( DecCountt < 0) {
            DecCount(alert("sorry we can't go ahead"))
        }
    }
    return (
        <div className='App'>
            <h1>Decrease the number</h1>
            <h2>{DecNum}</h2>
            <button className='btn' onClick={DecNumber}>Decrease the number</button>

        </div>
    )
}