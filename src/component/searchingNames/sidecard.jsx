import React from 'react'

export const SideCard=({data})=> {
    let{name,location,Education,Technical_Skills,Projects:{project1,project2}}=data
    let IiUpdate=(arg)=><li>{arg}</li>
    return (
    <ul>
       <div style={{fontWeight:"bold"}}> {IiUpdate(name)}</div>
       <br/>
       {IiUpdate(location)}
       <br/>
       <div>
        {IiUpdate(Education.Btech)}
        {IiUpdate(Education.school)}
        {IiUpdate(Education.Inter)}
        </div>
        <br/>
        <div>
        {Technical_Skills.Front_End.map((item)=>IiUpdate(item))}
        <br/>
        {Technical_Skills.Back_End.map((item)=>IiUpdate(item))}
        <br/>
        {Technical_Skills.Database.map((item)=>IiUpdate(item))}
        <hr/>
        </div>
        <br/>
        <div style={{backgroundColor:"rgb(204, 199, 199)"}}>
         {project1.map((item)=><div>{item}</div>)}
        </div>
        <div style={{backgroundColor:"rgb(204, 199, 199)",marginTop:"10px"}}>
        {project1.map((item)=><div>{item}</div>)}
        </div>
   </ul>
  )
}
