import React from 'react';
import {useState} from  "react"
 

export let UseState=()=>{
   let [stateValue,UpdateState]=useState(0);
   let UpdateStateChanges=()=>UpdateState(stateValue++);//way:1
   /*
   let UpdateStateChanges=()=>UpdateState((arg)=>arg+1);//way:2
   */

   return(
    <div>
        <h1>count:{stateValue}</h1>
        <button onClick={UpdateStateChanges}>Click</button>
    </div>
   )
}


