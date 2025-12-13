import { useState } from "react"

const MyComp0 = () => {
    const [name, setName] = useState("Petre")
    const [surname, setSurname] = useState("Sikmashvili")
    const [academy, setAcademy] = useState("GOA")

    return (
        <div>
            <h2>{name}</h2>
            <h2>{surname}</h2>
            <h2>{academy}</h2>
        </div>
    )
}

export default MyComp0;