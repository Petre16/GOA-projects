import { useState } from "react"

const Count = () => {
    const [count, setCount] = useState(0)

    const handleClick = decrease => {
        setCount(prev => prev -1)
    }

    return (
        <>
            <Count count={count} decrease={setCount} />
        </>
    )
}

export default Count;