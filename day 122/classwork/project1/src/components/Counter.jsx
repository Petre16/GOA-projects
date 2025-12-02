import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)

    const handleClick = InDec => {
        setCount(count + InDec)
    }


    return (
        <>
            <button onClick={() => handleClick(-1)}>-1</button>

            <p>{count}</p>
        </>
    )
}

export default Counter;