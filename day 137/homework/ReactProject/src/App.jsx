import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar.jsx"
import Home from "./Pages/Home.jsx"
import About from "./Pages/About.jsx"
import Profile from "./Pages/Profile.jsx"

const App = () => {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
        </>
    )
}

export default App;