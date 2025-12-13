import { useEffect, useState } from "react";

function Comp() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await new Promise((resolve) => {
                setTimeout(() => {
                    resolve("resolved")
                }, 1000);
            });

            setData(result);
            console.log(result);
        };

        fetchData();
    }, []);

    return (
        <>
            <p>petre</p>
        </>
    )
}

export default Comp;