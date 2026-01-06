import { useState } from "react"

const useCounter = () => {
    const [count, setCount] = useState(0)

    const handleClickIncrement = () => {
        setCount(prev => prev + 1)
    }

    const handleClickDecrement = () => {
        setCount(prev => prev - 1)
    }

    const handleClickReset = () => {
        setCount(0)
    }

    return {useCounter, handleClickIncrement, handleClickDecrement, handleClickReset}
}

export default useCounter;