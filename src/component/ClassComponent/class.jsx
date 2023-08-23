
import React from 'react'
class ChildContainer extends React.Component{

   constructor(props){
       super(props)
       this.state={Date:new Date().toString(),color:"grey"}
       console.log("constructor")
   }
   componentDidUpdate(a,b){
         if(a.date!=="12-01-2023"){
           console.log("satish",b)

         }
         else{
          console.log("satish",b)

         }
        
   }
   componentDidMount(){
    console.log("componentDidMount...............1")
    this.timerID=setInterval(()=>console.log(),1000)
    console.log("---------component..----")
    //
   }
   componentWillUnmount() {
    clearInterval(this.timerID)
    console.log("component-wiil-unMount")

  }
   tick=()=>{
           (setInterval(()=>(this.setState({Date:new Date()})),6000));
           console.log("logerr.................")

  }
   
   render(){
    console.log("render")
    console.log(Math.round(Math.random()*10000))
    return(<h1 onClick={this.tick}>{this.state.Date.toString()}</h1>)
   }

}

export class MainContainer extends React.Component{
    constructor(){
      super()
      this.state={Bool:true}
    }
 
    UpdateState=()=>this.setState(({Bool})=>({Bool:!Bool}))
    //way:2 :- this.setState((prestate)=>({h1:prestate.h1+" "+"prasad"})
    render(){
         let {Bool}=(this.state)
         return (
                  <>
                    <button onClick={this.UpdateState}>{Bool ? "show" : "Hide"}</button>
                    {Bool
                      &&
                     <div style={{height:100,width:100,background:"red",marginTop:"10px",borderRadius:"50%",textAlign:"center"}}>
                        <ChildContainer date={"15-08-2023"}/>
                     </div>
                    }

                  </> 
         );
    }
}
 


