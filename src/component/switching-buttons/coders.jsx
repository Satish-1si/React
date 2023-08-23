import React, { useState } from 'react'
import "./coders.css"

export const MainContainer=() =>{
let StorageData=["Learn React","Got The Job","Start the projects"]
let [value,UpdateValue]=useState(0)
let UpadateFunction=(arg)=>(arg==="Next")?(value<2)&&UpdateValue(value+1):(value>0)&&UpdateValue(value-1)
  return (
    
    <div className="container">
        {console.log(value)}
        <ul className='item-container'>
            <li className={(value===0)?"item-1":"item-4"}>0</li>
            <li className={(value===1)?"item-2":"item-4"}>1</li>
            <li className={(value===2)?"item-3":"item-4"}>2</li>
        </ul>
        <div className='text-container'>
            <h4>STEP{` ${value} :${StorageData[value]}`}</h4>
        </div>
        <div className="btn_container">
           <button onClick={()=>UpadateFunction("Next")}>next_1</button>
           <button onClick={()=>UpadateFunction("previous")}>next_2</button>
        </div>
    </div>
  )
}

