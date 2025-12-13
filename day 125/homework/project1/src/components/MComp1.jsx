import { useState } from "react"

const MComp1 = () => {
    const [forIn, setForIn] = useState({})

    const handleChange = ({target}) => {
        const {name, value} = target;
        setForIn(prev => ({
            ...prev,
            [name]: value
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem("form information", JSON.stringify(forIn))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" required onChange={handleChange} />
            <br /> <br />

            <input type="text" name="surname" required onChange=
            {handleChange} /> <br /> <br />

            <label htmlFor="date-input">Enter your birthday: </label>
            <input type="date" name="birth" required onChange={handleChange} id="date1" /> <br />
            <br />

            <input type="email" name="email" required onChange={handleChange} />
            <br /> <br />

            <input type="password" name="password" required onChange=
            {handleChange} /> <br /> <br />

            <button type="submit">Submit</button>

            <hr />
        </form>
    )
}

export default MComp1;