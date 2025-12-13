import { useState } from "react";

const MComp2 = () => {
    const [userIn, setUserIn] = useState({})

    const handleClick = () => {
        const retIn = JSON.parse(localStorage.getItem("form information"));
        setUserIn(prev => ({ ...retIn }))
    }

    return (
        <section>
            <button onClick={handleClick}>Click Submit</button>

            <div>
                {userIn.name !== "" && <p>{userIn.name}</p>}
                {userIn.surname !== "" && <p>{userIn.surname}</p>}
                {userIn.birth !== "" && <p>{userIn.birth}</p>}
                {userIn.email !== "" && <p>{userIn.email}</p>}
                {userIn.password !== "" && <p>{userIn.password}</p>}
            </div>
        </section>
    )
};

export default MComp2;