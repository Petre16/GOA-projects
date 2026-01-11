import { useState } from "react";

export const useCounter = (preferredValue = 0) => {
    const [count, setCount] = useState(preferredValue);

    const increase = () => setCount(prev => prev + 1)
    const decrease = () => setCount(prev => prev - 1)
    const reset = () => setCount(preferredValue)

    return [count, increase, decrease, reset];
}