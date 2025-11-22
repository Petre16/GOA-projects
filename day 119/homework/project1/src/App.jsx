import MyComponent from "./components/MyComponent.jsx";

const App = () => {
  const stA = [
    {name: "Petre", surname: "Sikmashvili", city: "Tbilisi"},
    {name: "Tom", surname: "Smith", city: "Berlin"},
    {name: "Nika", surname: "Gogebashvili", city: "Kobuleti"}
  ]

  return (
    <>
      <MyComponent studentsArr={stA} />
    </>
  )
}

export default App;