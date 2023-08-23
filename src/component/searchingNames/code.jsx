import React,{useState} from 'react'
import "./code.css"
import {UserData} from "./data.jsx"
import {SideCard} from "./sidecard.jsx"
import {obj} from "./tect.js"

let Card=({ imageUrl,name,role,id,callBack})=>{
        return(<article className="Card" id={id} onClick={(arg)=>{callBack(arg)}}>
                  <img id={id} src={imageUrl}/>
                  <div id={id} className='childSection'>
                   <h4 id={id}>{name}</h4>
                   <p id={id}>{role}</p>
                   </div>
                </article>)
}
export let MainContainer=()=>{
  let[Data,UpdateData]=useState([])
  let [Display,DisplayUpdate]=useState(false)
  let callBack=(arg)=>(arg.target.id>-1)?DisplayUpdate(arg.target.id):DisplayUpdate(false)
  let PassData=(arg)=>{
      let Storage=UserData.filter((item)=>{
      let UserSendValue=arg.target.value.toLowerCase();
      let DataBaseValue=item.name.toLowerCase();
      let condition=(DataBaseValue.includes(UserSendValue)&&(DataBaseValue.indexOf(UserSendValue) !==-1))
      return (condition)?UserSendValue:null
      })
      UpdateData(Storage)
  }
  return (
         <div className="container_box">
         <header className="header"><input type="search" onChange={PassData} />
         <section>{(Data.length!==0)&&Data.map(({ imageUrl,name,uniqueNo,role})=><Card  id={uniqueNo} imageUrl={imageUrl}name={name} callBack={callBack} key={uniqueNo}role={role}/>)}</section>
         </header>
         {
        Display&&<section className='SectionTwo'>
        <header className='SideHeader'><marquee>Welcome Come {obj[Display].name} to Download...... Your Smart Resume...</marquee></header>
        {UserData.map(({uniqueNo,userData:{name,role}})=>(uniqueNo===parseInt(Display))&&<SideCard key={name} data={obj[Display]}/>)}
        <footer className='SideFooter'></footer>
        </section>
      }

    </div>
  )
}

