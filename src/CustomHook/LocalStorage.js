import { useEffect, useState } from "react"

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        const jsonStr = localStorage.getItem(key)
        return jsonStr !== null ? JSON.parse(jsonStr) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, value)
    }, [key, value])

    return [value, setValue];
}

export default useLocalStorage;