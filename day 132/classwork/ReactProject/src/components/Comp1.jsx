import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const Comp1 = () => {
    const val1 = useContext(MyContext);
    console.log(val1);

    return (
        <>
            <p>{val1}</p>
        </>
    )
}

export default Comp1;