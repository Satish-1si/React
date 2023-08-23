import React, { useState } from 'react'
import "./code.css"
export const ToggleEffect=() =>{
    let [Toggle,UpdateToggle]=useState(false)
  return (
    <div ClassName="container">
        <section className="section">
           {<article ClassName="heading" onClick={(arg)=>UpdateToggle(!Toggle)}><h1>what is meant by React Hooks???</h1></article> }
           <hr/>
           <pre>
           {(Toggle==false)&&<article ClassName="paragraph"onClick={(arg)=>UpdateToggle(!Toggle)}>
             <h3>
             1. Hooks are a feature in React for managing state and side effects in functional components.
             <br/>
             2. They replace class components' lifecycle methods with simpler functions like `useEffect`.
             <br/>
             3. Hooks like `useState` and `useEffect` improve code organization and reusability.
             <br/>
             4. Custom hooks enable encapsulation of logic for sharing across components.
             <br/>
             5. Hooks follow specific rules to ensure consistent and predictable behavior.
            </h3>
           </article>}
           </pre>
        </section>
    </div>
    )
}

