import { useState } from "react";
import { Navigate } from "react-router-dom";

const Home = () => {
    const [count, setCount] = useState(0);

    if (count === 1 ) {
        return (
            <Navigate to="/profile" />
        )
    }

    return (
        <div>
            <h1>Welocme</h1>

            <hr />

            <button onClick={() => setCount(prev => prev + 1)}>Go to Profile</button>
        </div>
    )
}

export default Home;