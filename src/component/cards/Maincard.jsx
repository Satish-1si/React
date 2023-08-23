import React, { useState, useEffect } from "react";
import { ChildCard } from "./ChildCard";
import {SubChild} from "./subChild";
import "./StyleCard.css";

export let List = () => {
  const [Listdata, setData] = useState([]);
  const [array, updateSelection] = useState([]);
  const [NextPage, UpadateNextPage] = useState([{nextpage:true}]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos", { method: "GET" })
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  let select_data = (id) => {  //[1,2,3]
        let arr;
        if(array.includes(id)){
          array.splice( array.indexOf(id),1);
          console.log("delete"+array)
          arr=[...array];
        }
        else {
          console.log("get"+array)
          arr= [...array,id]
        }
        updateSelection(arr)
  };
  let ShowNextPage=()=>{
    (NextPage[0].nextpage===false)?UpadateNextPage([{nextpage:true}]):UpadateNextPage([{nextpage:false}])
  }

  return (
    <div>
      <nav className="mainnav">
        <h3>Get the products</h3>
      </nav>
      <nav className="childnav">
        <h4>select-items: {array.length}</h4>
        <button onClick={ShowNextPage}>{NextPage[0].nextpage?"submit":"back"}</button>
        </nav>
      <ul className="Container">
      {NextPage[0].nextpage?Listdata.map(({ albumId, id, title, url, thumbnailUrl}) => (
          <ChildCard
            key={id}
            albumId={albumId}
            id={id}
            title={title}
            url={url}
            thumbnailUrl={thumbnailUrl}
            callBack={select_data}
            bool={NextPage[0].nextpage}
          />
        )):
        (array.map((item)=><ChildCard
         key={Listdata[item].id}
        albumId={Listdata[item].albumId} 
        id={Listdata[item].id} 
        title={Listdata[item].title} 
        url={Listdata[item].url} 
        thumbnailUrl={Listdata[item].thumbnailUrl}
        callBack={select_data}
        bool={NextPage[0].nextpage}
        />))//datapass={Listdata[item].id}

       }
      </ul>
      <nav className="mainnav">Contract Details: 9652330848</nav>
    </div>
  );
};
