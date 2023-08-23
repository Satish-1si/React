import React from "react";
import { useState } from 'react';
import { sculptureList } from "./sculptureList";

export function Profile() {
  let [index,updateIndex]=useState(0);
  return(
    <div className="Card">
        {index !== 11}
        <h2>{sculptureList[{index}].name}</h2>
        <h3>{sculptureList[index].artist}</h3>
        <p>{sculptureList[index].description}</p>
        <img src={sculptureList[index].url} alt={sculptureList[index].alt}/>
        <br/>
        <button onClick={()=>updateIndex((pre)=>((pre<11)?pre+1:pre))}>{"Next"}</button>
 
        <button onClick={()=>updateIndex((pre)=>(pre>0)?pre=pre-1:pre)}>{"Back"}</button>
   
        <button onClick={()=>updateIndex((pre)=>0)}>{"Reset"}</button>
    </div>
  )
}
