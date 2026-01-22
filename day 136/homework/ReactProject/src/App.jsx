import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import Comp1 from "./components/Comp1.jsx";
import Comp2 from "./components/Comp2.jsx"; 

const Hello = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<Home/>} />
    <Route path="/C1" element={<Comp1/>} />
    <Route path="/C2" element={<Comp2/>} />
  </>
))

const App = () => {
  return (
    <>
      <RouterProvider router={Hello} />
    </>
  )
}

export default App;