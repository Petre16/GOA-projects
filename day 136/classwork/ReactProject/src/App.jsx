import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Comp1 from "./components/Comp1.jsx";
import Comp2 from "./components/Comp2.jsx";
import Comp3 from "./components/Comp3.jsx"; 

const Hello = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<Comp1/>} />
    <Route path="/C2" element={<Comp2/>} />
    <Route path="/C3" element={<Comp3/>} />
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