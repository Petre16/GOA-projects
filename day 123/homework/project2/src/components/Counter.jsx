import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)

    const handleClick = IncDec => {
        setCount(prev => prev + IncDec)
    }

    return (
        <div style={{"justify-content": "center", "align-items": "center", "display": "grid", "textAlign": "center"}}>
            <h1>Counter App</h1>
            <br />
            <h2>{count}</h2>
            <br />

			<div style={{"marginTop": "20px"}}>
				<button onClick={() => handleClick(1)} style={{"color": "white", "backgroundColor": "green", "width": "150px", "height": "25px", "marginRight": "10px"}}>Increment</button>
            	<button onClick={() => handleClick(-1)}  style={{"color": "white", "backgroundColor": "red", "width": "150px", "height": "25px", "marginRight": "10px"}}>Decrement</button>
			</div>
        </div>
    )
}

export default Counter;