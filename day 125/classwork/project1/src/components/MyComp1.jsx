import { useEffect, useState } from "react";

const MyComp1 = () => {
    const [count, setCount] = useState(0);

    useEffect(() =>  {
        alert(count)
    })

    return (
        <>
            <button onClick={() => setCount(count +1)}>+1</button>
        </>
    )
}

export default MyComp1;