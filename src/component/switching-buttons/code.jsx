import React, { useState } from 'react'
import "./code.css"
let Button=({name,att,callback,btn})=><button className={`${att} ${btn}`}  onClick={(arg)=>callback(arg.target.textContent)}>{name}</button>
let Heading=({arg,callbackToggle})=>(<h1 className='' onClick={callbackToggle}>{arg}</h1>)
export let MainContainer=()=> {
    let [value,UpdateValue]=useState(0)
    let callBack=(val)=>{
        let arg=parseInt(val);
        if(arg===1){
            UpdateValue(1)
        }
        else if(arg===2){
           UpdateValue(2)
        }
        else if(arg===3){
           UpdateValue(3)
        }
    }
    let [Bool,UpdateBool]=useState(false)
    let callbackToggle=()=>UpdateBool(!Bool)
                               
  return(
      <header>
            <div className='container'>
            <div className='btn-container'>
            <Button name="1" att="item-1" btn={"btn"} callback={callBack}></Button>
            <Button name="2" att="item-2" btn={"btn"} callback={callBack}></Button>
            <Button name="3" att="item-3" btn={"btn"} callback={callBack}></Button>
            </div>
            <div className={`heading-container `}>
            {<Heading arg={(value===1)
                             ?("Learn React")
                             :(value===2)
                             ?("Got the Job")
                             :(value===3)
                             ?("Develop the projects")
                             :"choose"}
                             callbackToggle={callbackToggle}/>
              
             
                    
            }
            <hr/>
            </div>
            <div className='moving-btn-container'>
            <button onClick={()=>(value>=0&&value<=3)?callBack(value+1):""} >Next</button>
            <button onClick={()=>(value>=0&&value<=3)?callBack(value-1):""}>previous</button>
            </div>
       </div>
      </header>
     )
}

