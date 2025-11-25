import Hello from "./components/Hello.jsx";
import Button from "./components/HelloButton.jsx";

const App = () => {
  const handleClick = () => {
    alert("Button Clicked!");
  }

  return (
    <>
      <Hello name="Petre" />
      <Button onClick={handleClick} />
    </>
  )
}

export default App;