import { useContext } from "react";
import { CountContext } from "../context/CountContext.jsx";

const Comp = () => {
    const [count, setCount] = useContext(CountContext);

    return (
        <>
            <p>{count}</p>

            <button onClick={(() => setCount(prev => prev + 1))}>+1</button>
        </>
    )
}

export default Comp;