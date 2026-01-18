import Comp from "./components/Comp.jsx";
import { ErrorBoundary } from "react-error-boundary";
import FallbackUI from "./components/FallbackUI.jsx";

const App = () => {
  return (
    <>
      <ErrorBoundary FallbackComponent={FallbackUI}>
        <Comp />
        <Comp />
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={FallbackUI}>
        <Comp />
      </ErrorBoundary>

      <Comp />
    </>
  )
}

export default App;