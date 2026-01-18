import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { StudentsContext } from "./context/StudentsContext.jsx"


createRoot(document.getElementById('root')).render(
  <StudentsContext.Provider value={["Demetre", "Petre", "Beqa", "Davit", "Aleqsandre", "Nikolozi", "Lizi"]}>
    <App />
  </StudentsContext.Provider>
)