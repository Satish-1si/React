import React,{useState} from "react";
import "./code.css"
import {styles} from "./props.js"
let Button=({arg,colors})=>{
    const [color,UpdateColor]=useState();
    return(<button style={{color:colors}} onClick={(arg)=>console.log(arg.target.style)}>{arg}</button>)
}
export let MainContainer=()=>{
    console.log(styles)
    return(<div>
          <div><h1>Traffic Lights</h1></div>
          <div>{styles.map(({text,color},Index)=><Button key={text+Index}  arg={text} color={color}/>)}</div>
         </div>)
}