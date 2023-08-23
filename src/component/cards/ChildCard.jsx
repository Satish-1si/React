import React from "react";
import "./StyleCard.css";

export let ChildCard = ({ albumId, id, title, url, thumbnailUrl, callBack,bool }) => {
  return (
    <li className={"Card"}>
      <h3>product-ID :- {albumId}</h3>
      <h4>Title :- {title}</h4>
      <img src={url} alt={"img-error"} />
      <br />
      <a href={thumbnailUrl} target="--blank">view source color</a>
      <br />
      {bool&&<input type="checkbox" onClick={() => callBack(id)} />}
      <hr />
    </li>
  );
};



function generate_promise(arg){
  return  Promise.resolve(arg)
}
function student(Rollno){
    
    return generate_promise(
             [
              {user_id:Rollno,name:"satish manepalli"},
              {user_id:null,name:"prasad manepalli"},
              {user_id:null,name:"siva manepalli"}
            ]
         )
}

function libary(obj){
     let array=(obj.map((item)=>
     (item.user_id!==null)?
     "id getting":
     "id not getting"))
     return generate_promise(array)
}

function get_books(array){
 let result=array.map((item)=>
          (item === "id getting")?
          ({index:"issue"}):
          ({index:"not isuse"})
          )
          return generate_promise(result)
}

//async ===> always return product
//await ==>convert promise data into normaldata-->return normaldata
async function result(){
             let a= await student(135)
             let b= await libary(a)
             return await get_books(b)
  
}
result().then((arg)=>console.log(arg))
        



