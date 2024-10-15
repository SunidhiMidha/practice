import React from "react";
import "./Count.css"
import useCountHook from "./useCounterHook";

export default function Counter() {
    const [value, updateValue] = useCountHook()
    return(
        <div className="counter-component">
            <button className="button-ui" onClick={() => updateValue("minus")}>-</button>
            {value}
            <button className="button-ui" onClick={() => updateValue("add")}>+</button>
        </div>
    )
}