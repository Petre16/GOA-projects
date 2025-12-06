import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)

    const handleClick = InRes => {
        setCount(count + InRes)
    }

    return (
        <div>
            <p>{count}</p>

            <button onClick={() => handleClick(2)} disabled={count > 10} >+2</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => handleClick(-2)} disabled={count < -10} >-2</button>
        </div>
    )
}

export default Counter;