import Button from "./components/Button.jsx";

const App = () => {
  const handleClick = () => {
    alert("Hello World!")

    return (
      <>
        <Button handleClick={handleClick} />
      </>
    )
  }
}

export default App;