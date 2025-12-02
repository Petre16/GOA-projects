import { useState } from "react"

const Div = () => {
    const [color, setColor] = useState("")

    const handleChange = (e) => {
        setColor(e.target.value)
    }

    return (
        <div style={{"height": "100vh", "width": "100vw", "display": "flex", "alignItems": "center", "justifyContent": "center", "backgroundColor": `${color}`}}>
            <form>
                <input type="text" onChange={handleChange} />
            </form>
        </div>
    )
}

export default Div;