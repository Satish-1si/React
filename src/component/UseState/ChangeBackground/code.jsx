import React, { useState } from "react";
import { Colors } from "./ComponentDesign";
import "./code.css";
let Button=({arg,ParentCallBack})=><button className="btn" style={{backgroundColor:arg}} onClick={(event)=>ParentCallBack(event)}>{arg}</button>
export let MainContainer=()=>{
     let [BackGround,UpdateBackGround]=useState("white");
     let ParentCallBack=(event)=>UpdateBackGround(event.target.textContent)
     return(<div className="container" style={{backgroundColor:BackGround}}>
             {(BackGround !== "white")?<marquee style={{color:"white"}}><h1>{BackGround}</h1></marquee>:""}
             {<section className="section">
              {Colors.map((color)=><Button ParentCallBack={ParentCallBack} arg={color}/>)}
            </section>}
           </div>)
}