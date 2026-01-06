import { useEffect, useState } from "react"

const Comp1 = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(count)
    }, [count])

    const handleClick = () => {
        setCount(prev => prev + 1)
    }

    return (
        <>
            <p>{count}</p>
            <button onClick={handleClick}>Click me</button>
        </>
    )
}

export default Comp1;