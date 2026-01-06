import useCounter from "./hooks/useCounter.jsx";
import { use, useEffect } from "react";

const App = () => {
  const [counter, handleClickIncrement, handleClickDecrement, handleClickReset] = useCounter();

  useEffect(() => {
    console.log(counter)
  }, [counter])

  return (
    <>
      <p>{counter}</p>

      <button onClick={handleClickIncrement}>+1</button>
      <button onClick={handleClickDecrement}>-1</button>
      <button onClick={handleClickReset}>Reset</button>
    </>
  )
}

export default App;