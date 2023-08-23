import React, { useState } from 'react'
import "./code.css"
const Code = props => {
    let [value,UpdateValue]=useState("");
    
  return (
    <header className='header' style={{background:value}}>
     <nav className='navbar'>
        <marquee>
        <button onClick={(arg)=>UpdateValue(arg.target.textContent)}>blue</button>
        <button onClick={(arg)=>UpdateValue(arg.target.textContent)}>black</button>
        <button onClick={(arg)=>UpdateValue(arg.target.textContent)}>Red</button>
        <button onClick={(arg)=>UpdateValue(arg.target.textContent)}>yellow</button>
        </marquee>
     </nav>
    </header>
  )
}


export default Code