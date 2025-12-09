import { useState } from "react"

const people = [
    {name: "Petre", surname: "Sikmashvil"},
    {name: "Giorgi", surname: "Kalichava"},
    {name: "Data", surname: "Kipshidze"},
    {name: "Davit", surname: "Davitasgvili"},
    {name: "Luka", surname: "Gongadze"},
    {name: "Akaki", surname: "Khidisheli"},
    {name: "Giorgi", surname: "Iakobishvili"},
    {name: "Nikoloz", surname: "Molodinashvili"}
]

const MyComp = () => {
    const [selected, setSelected] = useState([]);

    const handleClick = ({target}) => {
        const selectedPeople = target.value;

        if (!selected.includes(selectedPeople)) {
            setSelected(prev => [selectedPeople, ...prev])
        }
    }

    const handleDelete = ({target}) => {
        const selectedPeople = target.value;

        setSelected(prev => [...prev].filter(el => el !== selectedPeople))
    }

    return (
        <>
            <section>
                <ul>
                    {
                        selected.map((people, index) => (
                            <li key={index}>
                                <p>{people}</p>
                                <button value={people} onClick={handleDelete}>Remove</button>
                                <br /><br />
                            </li>
                        )) 
                    }
                </ul>

                {selected.length !== 0 && <button onClick={() => setSelected(prev => [])}>Reset</button> }
                {selected.length !== 0 && <hr />}
            </section>

            <section>
                <ul>
                    {
                        selected.map((people, index) => (
                            <li key={index}>
                                <p>{people}</p>
                                <button value={people} onClick={handleClick}>Add</button>
                                <br /><br />
                            </li>
                        ))
                    }
                </ul>
            </section>
        </>
    )
}

export default MyComp;