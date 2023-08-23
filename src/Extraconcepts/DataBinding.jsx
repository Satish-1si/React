
import React, { useEffect, useState } from "react";
import { UseState } from "react";

export const Binding=()=>{
    const [inputValue, setInputValue] = useState('');
    useEffect(()=>{setInputValue(300)},[])

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>{inputValue}</h1>
    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
    />
    
    <button onClick={()=>{setInputValue(200)}}>submit</button>
    </div>
  );
}

