import React from 'react'
import useLocalStorage from "./LocalStorage"

export default function UsingHook() {

    let [value, setValue] =  useLocalStorage("test",120);
  return (
    <div>
      {value}
      <button onClick={()=>{
        setValue(56)
      }}>click</button>
    </div>
  )
}
