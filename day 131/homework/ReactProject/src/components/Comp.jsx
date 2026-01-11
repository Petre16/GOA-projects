import { useCounter } from "../hooks/useCounter";

const Comp = () => {
    const [count, increase, decrease, reset] = useCounter();

    return (
        <div>
            <p>{count}</p>

            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Comp;