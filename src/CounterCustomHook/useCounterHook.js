import { useState } from "react";

export default function useCountHook(initialState = 0) {
    const [value, updateValue] = useState(initialState);
    
    const increaseCount = () => {
        updateValue(value => value+1)
    }
    
    const decreaseCount = () => {
        updateValue(value => value-1)
    }

    return [value, (type) => type === "add" ? increaseCount() : decreaseCount()]
}