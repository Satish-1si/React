import React, { useState } from "react";
import {Data} from "./Database"
export let PasswordValidation=()=>{
    let HideData=({text,color})=>{
      return <span style={{color:color}}><h6>{text}</h6></span>
    }
    let [Username,UpdateUserName]=useState()
    let UserNameVadition=(arg)=>{
        (Data.some(({name})=>name===arg))
        ?UpdateUserName(arg)
        :UpdateUserName(null)
    }
    let [ValidationResult,UpdateValidationResult]=useState()
    let PasswordVadition=(arg)=>{
         (Data.some(({name,password})=>(Username===name && password===arg)))
         ?UpdateValidationResult(true)
         :UpdateValidationResult(false)
    }
    let GetTheData=(arg)=>{
        (arg.target.type==="text")
        ?UserNameVadition(arg.target.value)
        :PasswordVadition(arg.target.value)
      }

      let [MessageResult,UpdateMessageResult]=useState()
      let Result=(arg)=>(ValidationResult)?
                        UpdateMessageResult("proceding........."):
                        UpdateMessageResult("invalid valid Data")
      return(<div>
        <pre>
        <h4>Enter the UserName</h4>
        <input type="text" onChange={GetTheData}/>
        {Username &&
        <HideData text={"valid"} color="green"/> 
        }
        <h4>Enter the password</h4>
        <input type="password" onChange={GetTheData} />
        {ValidationResult &&
        <HideData text={"valid"} color="tamoto"/> 
        }
        <button onClick={Result}>submit</button>
        {<h6>{MessageResult}</h6>}
        </pre>
        
        
        </div>)
}



