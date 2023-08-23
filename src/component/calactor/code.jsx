import React, { useState } from "react"
import {v4 as id} from "uuid"
import "./code.css"
let Data=[0,1,2,3,4,5,6,7,8,9,"+","-","*","/","clr","="]
export const Cal=()=>{
    let [State,UpdateState]=useState("");
    
    let UpdatedStateValue=(event)=>{
       let userValue=(event.target.textContent)
       if(userValue !== "=" && userValue !== "clr" ) UpdateState((pre)=>pre+userValue)
       else if (userValue === "=")  UpdateState((pre)=> eval(pre)) // "10 + 56" 
       else if (userValue === "clr")  UpdateState('') 
    }
      
        
    
    return (<>
         
           <div className="container_1">
           { console.log(State)}
            <div className="result">{State}</div>
           {Data.map((item,index)=>(<div key={id()} onClick={UpdatedStateValue}className={"item"+index}>{item}</div>))}
           </div>
         </>)
}

