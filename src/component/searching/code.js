import React, { useState } from "react";
import "./code.css"
const Button=({text,callBack})=><button className="btn" style={{backgroundColor:text}} onClick={(arg)=>callBack(arg)}>{text}</button>
export const Data = () => {
  const[BackgroundColor,updateBackgroundColor]=useState("white")
  const callBack=(arg)=>updateBackgroundColor(arg.target.textContent)
  return(<div className="container" style={{backgroundColor:BackgroundColor}}>
           <div className="h1">
           <h1>Color Picker</h1>
           </div>
           <div className="btn-container">
            <Button text="red"   callBack={callBack}/>
            <Button text="green" callBack={callBack}/>
            <Button text="blue"  callBack={callBack}/>
            <Button text="yellow"callBack={callBack}/>
           </div>
           <div className="show-container">
            <h6>BackgroundColor:{BackgroundColor}</h6>
           </div>
          </div>)
}
