import { Routes, Route } from "react-router"
import Home from "./Pages/Home.jsx"
import Books from "./Pages/Books.jsx"
import LogIn from "./Pages/LogIn.jsx"
import SignUp from "./Pages/SignUp.jsx"
import Panel from "./Pages/Panel.jsx"
import Navbar from "./Components/Navbar.jsx"

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/books" element={<Books />}/>
        <Route path="/logIn" element={<LogIn />}/>
        <Route path="/signUp" element={<SignUp />}/>
        <Route path="/panel" element={<Panel />}/>
      </Routes>
    </>
  )
}

export default App