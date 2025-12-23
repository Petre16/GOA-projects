import { useEffect, useState } from "react"

const Comp1 = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const handleClick = () => {
            setCount(prev => prev + 1);
        };

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);

    return (
        <button>{count}</button>
    );
}

export default Comp1;