import { useEffect, useState } from "react";

const Comp1 = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const myTimer = setInterval(() => {
            setCount(prev => {
                if (prev === 10) {
                    clearInterval(myTimer);
                    return prev;
                }
                return prev + 1;
            });
        }, 500);

        return () => clearInterval(myTimer);
    }, [])

    return (
        <>
            <p>{count}</p>
        </>
    )
};

export default Comp1;