import React from "react"
import { useEffect,useState } from "react"
import { v4 as called_name } from 'uuid';

export let UseEfeect=()=>{
    let [stateValue,UpdateState]=useState(0);
    let [Fetch,UpdateFetch]=useState([]);
    
         /*component render avinna every time ===>useEffect excute*/
        /*component Did mount*/
          //  useEffect(()=>{
         //         console.log("satish")
        //  })//state excute multiples
       //setInterval(()=>UpdateState(stateValue+1),1000)

        /*component render avinna  time ===>useEffect excute*/
       /*component Did mount*/
          // useEffect(()=>{
         //     fetch('https://fakestoreapi.com/products')
        //     .then(res=>res.json())
       //     .then(json=>UpdateFetch(json))
      // },[])//state excute only one time after rendering

       /*props|state Update avinna every time ===>useEffect excute*/
      /*componentDidUpdate*/
        //  useEffect((arg)=>{
       //   console.log("satish-componentDidUpdate")
      // },[stateValue])//state update avinaa every time useEffect call avuthudi
     
     

    return(
    <div>
      <h1>count{stateValue}</h1>
       <input onBlur={()=>UpdateState(stateValue+1)} />
        
     
    </div>
    )

}


// export class UseEfeect extends React.Component {
//   constructor() {
//     super();
//     this.state = { count: 5 };
//   }

//   componentDidMount() {
//     console.log("manepalli")
//      this.setState({count:this.state.count+1})
    
//   }
  
//   componentDidUpdate(a,b){

//      if (this.state.count !== b.count)   console.log("satish")
//   }

//   render() {
//     return <h1 >{this.state.count}</h1>;
//   }
// }

