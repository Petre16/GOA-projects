import { useState } from "react"

const MyComp = () => {
    const [count, setCount] = useState(0)

    const handleClick = InDecRes => {
        setCount(count + InDecRes)
    }

    return (
        <div>
            <button onClick={() => handleClick(1)}>Increase</button><br />
            <button onClick={() => handleClick(-1)}>Decrease</button><br />
            <button onClick={() => setCount(0)}>Reset</button><br />

            <br />

            <p>{count}</p>
        </div>
    )
}

export default MyComp;