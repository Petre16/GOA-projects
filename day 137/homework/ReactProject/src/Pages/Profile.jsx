import { Navigate } from "react-router-dom";
import { useState } from "react";

const Profile = () => {
    const [count, setCount] = useState(0)

    if (count === 1) {
        return (
            <Navigate to="/" />
        )
    }

    return (
        <div>
            <h1>Profile</h1>
            <hr />
            <p>Name: Petre</p>
            <p>Surname: Sikmashvili</p>

            <button onClick={() => setCount(prev => prev + 1)}>Back to Home</button>
        </div>
    )
}

export default Profile;