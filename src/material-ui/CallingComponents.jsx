import React from "react"
import  {Typo}         from "./Typography"
import  {Btn}          from "./Button"
import  {ToggleButtons}  from "./ToggleButton"

export const  MaterialComponents=()=>{
      return(
        <div>
            <Typo/>
            <hr/>
            <Btn/>
            <hr/>
            <ToggleButtons/>
            <hr/>
        </div>
      )
}