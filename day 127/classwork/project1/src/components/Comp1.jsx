import { useEffect, useState } from "react";

const Comp1 = () => {
    const [data, setData] = useState([])

    const asyncF = async (apiL) => {
        const api = await fetch(apiL)
        const res = await api.json()
        setData(res)
    }

    useEffect(() => {
        asyncF("https://jsonplaceholder.typicode.com/todos/1")
    }, [])

    return (
        <>
            <div>{data.title}</div>
        </>
    )
}

export default Comp1;