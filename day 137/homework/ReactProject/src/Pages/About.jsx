import { useState } from "react";
import { Navigate } from "react-router-dom";

const About = () => {
    const [count, setCount] = useState(0)

    if (count === 1) {
        return (
            <Navigate to="/" />
        )
    }

    return (
        <div>
            <h1>WebSite Name: "About"</h1>

            <p>About</p>

            <button onClick={() => setCount(prev => prev + 1)}>Back to Home</button>
        </div>
    )
}

export default About;